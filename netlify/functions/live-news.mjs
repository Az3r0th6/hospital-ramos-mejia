export default async (req) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=600'
  };

  try {
    const rssUrl =
      'https://news.google.com/rss/search?q=%22Hospital+Ramos+Mej%C3%ADa%22&hl=es-419&gl=AR&ceid=AR:es-419';
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; HospitalRamosMejiaPortal/2.0)'
      }
    });

    if (!response.ok) {
      throw new Error(`RSS status ${response.status}`);
    }

    const xml = await response.text();
    const rawMatches = [
      ...xml.matchAll(
        /<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<pubDate>(.*?)<\/pubDate>[\s\S]*?<source[^>]*>(.*?)<\/source>[\s\S]*?<\/item>/g
      )
    ];

    const posRegex =
      /(ramos mejía|hospital público|salud pública|trasplante|médula|stroke|acv|equip|resonancia|tomograf|distingui|reconoc|residencia|vacun|jornada|médic|servicio|inaugur|incorpor|clínic|investig|uba|cesac)/i;
    const badRegex =
      /(choque|chocó|vuelco|volante|autos|atropell|muerto|murió|falleci|herido|policía|detenido|crimen|robo|incendio|paro|asamblea|reclamo|piquete|partido|sindicato|gremial|denuncia|baleado|apuñal|accidente|cayó|andamio|politraumatismo|piden informes|la plata|fuga|presa|preso|agresión)/i;

    const parsed = rawMatches
      .map((m) => {
        const rawTitle = m[1]
          .replace(/<!\[CDATA\[|\]\]>/g, '')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&amp;/g, '&')
          .trim();
        const cleanTitle = rawTitle.replace(/\s*-\s*[^-]+$/, '').trim();
        const link = m[2].trim();
        const pubDate = new Date(m[3].trim());
        const source = m[4]
          .replace(/<!\[CDATA\[|\]\]>/g, '')
          .replace(/&amp;/g, '&')
          .trim();

        return {
          title: cleanTitle,
          link,
          pubDate: isNaN(pubDate.getTime()) ? new Date() : pubDate,
          source
        };
      })
      .filter(
        (item) =>
          /ramos mej[ií]a/i.test(item.title) &&
          posRegex.test(item.title) &&
          !badRegex.test(item.title) &&
          !badRegex.test(item.source) &&
          item.title.length > 35
      )
      .sort((a, b) => {
        // Priorizar fuentes oficiales de Buenos Aires Ciudad y luego por fecha más reciente
        const aOfficial = /buenos aires ciudad/i.test(a.source) ? 1 : 0;
        const bOfficial = /buenos aires ciudad/i.test(b.source) ? 1 : 0;
        if (bOfficial !== aOfficial) return bOfficial - aOfficial;
        return b.pubDate - a.pubDate;
      });

    // Deduplicar noticias sobre el mismo tema (ej: trasplante de médula ósea)
    const unique = [];
    const seenTopics = new Set();
    for (const item of parsed) {
      const topicKey = item.title
        .toLowerCase()
        .replace(/[^a-záéíóúñ0-9\s]/g, '')
        .split(/\s+/)
        .filter((w) => w.length > 5)
        .slice(0, 3)
        .join('-');
      if (/m[eé]dula/i.test(item.title)) {
        if (seenTopics.has('medula')) continue;
        seenTopics.add('medula');
      } else if (/stroke|acv/i.test(item.title)) {
        if (seenTopics.has('stroke')) continue;
        seenTopics.add('stroke');
      } else if (seenTopics.has(topicKey)) {
        continue;
      } else {
        seenTopics.add(topicKey);
      }
      unique.push(item);
    }

    return new Response(
      JSON.stringify({
        status: 'ok',
        updatedAt: new Date().toISOString(),
        items: unique.slice(0, 4)
      }),
      { status: 200, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: err.message,
        items: []
      }),
      { status: 200, headers }
    );
  }
};
