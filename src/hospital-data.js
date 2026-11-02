const CURRENT_YEAR = new Date().getFullYear();
const FOUNDATION_YEAR = 1868;
const TRAJECTORY_YEARS = CURRENT_YEAR - FOUNDATION_YEAR;

export const HOSPITAL_DATA = {
  "institution": {
    "name": "Hospital General de Agudos Dr. José María Ramos Mejía",
    "shortName": "Hospital Ramos Mejía",
    "founded": 1868,
    "originalName": "Lazareto San Roque",
    "director": "Dr. Hugo Aníbal Pandullo",
    "subdirectora": "Dra. Fatima Diaz",
    "directorAdjuntoAdmin": "Nicolas Hugo Morato",
    "gerenteOperativoFinanciero": "Ximena Romero Sánchez",
    "authorities": [
      {
        "role": "Director Médico",
        "name": "Dr. Hugo Aníbal Pandullo",
        "badge": "Dirección Médica",
        "icon": "👨‍⚕️",
        "desc": "Conducción general, planificación asistencial y dirección médica estratégica del Hospital Ramos Mejía."
      },
      {
        "role": "Subdirectora",
        "name": "Dra. Fatima Diaz",
        "badge": "Subdirección",
        "icon": "👩‍⚕️",
        "desc": "Gestión asistencial continua, supervisión clínica hospitalaria y coordinación de divisiones asistenciales."
      },
      {
        "role": "Director General Adjunto de Gestión Administrativa",
        "name": "Nicolas Hugo Morato",
        "badge": "Gestión Administrativa",
        "icon": "👔",
        "desc": "Supervisión de operaciones no asistenciales, infraestructura, recursos generales y logística hospitalaria."
      },
      {
        "role": "Gerencia Operativa de Gestión Administrativa, Económica y Financiera",
        "name": "Ximena Romero Sánchez",
        "badge": "Gestión Económica",
        "icon": "📊",
        "desc": "Administración de presupuesto público, tesorería, contrataciones, compras y gestión financiera institucional."
      }
    ],
    "address": "General Urquiza 609",
    "city": "Ciudad Autónoma de Buenos Aires (C1221ADC)",
    "neighborhood": "Balvanera (Comuna 3)",
    "country": "Argentina",
    "mainPhone": "(+54) 11 4127-0200",
    "emergencySame": "107",
    "turnosCaba": "147",
    "turnosPba": "0800-999-2727",
    "mapsUrl": "https://goo.gl/maps/VmXYEgjrGHkYhj247",
    "stats": {
      "beds": "427",
      "annualDischarges": "10.269",
      "annualOutpatient": "+470.000",
      "networkHospitals": "33 hospitales de la Ciudad"
    },
    "yearsOfService": "158 años de salud pública (1868 - 2026)",
    "currentYear": 2026
  },
  "specialties": [
    {
      "id": "alergia",
      "file": "alergia.html",
      "title": "Alergia e Inmunología",
      "category": "Médica",
      "planImg": "/de/alergia.gif",
      "phone": "4127-0200 (Int. 1244)",
      "email": "alergiahospitalramosmejia@gmail.com",
      "chief": "Dra. Agustina Zambernardi",
      "location": "El consultorio externo Nº 112 se encuentra en el 1er piso del ala derecha del pabellón consultorios externos. .com",
      "detailUrl": "/servicios/alergia.html",
      "historicalOrigin": "Creado en 1938 por el Dr. Julio Cruciani tras fundar el primer Consultorio de Asma público del país.",
      "pioneeringMilestones": [
        "Primer consultorio público de asma y alergia de Argentina (1938)",
        "Pabellón propio de enfermedades alérgicas (1940)",
        "Creación de la Sociedad para el Estudio de la Alergia (1941) por el Dr. Cruciani",
        "Pioneros en la producción de extractos alergénicos para diagnóstico y tratamiento"
      ],
      "historicalFigures": [
        "Dr. Julio A. Cruciani",
        "Dr. Emilio Blanco",
        "Dr. Adrián Lara",
        "Dres. Bacigaluppi"
      ]
    },
    {
      "id": "alimentacion",
      "file": "alimentacion.html",
      "title": "Alimentación",
      "category": "Apoyo y Rehabilitación",
      "planImg": "/de/aliment.gif",
      "phone": "4127-0200 (Int. 1333 / 1335)",
      "email": "alimramos@gmail.com",
      "chief": "Lic. Graciela Gramisci",
      "location": "El Servicio de Alimentación se encuentra en la planta baja del ala derecha del pabellón cirugía. El consultorio externo Nº 151 se encuentra en el ala izquierda del primer piso del pabellón de consultorios externos. .com",
      "detailUrl": "/servicios/alimentacion.html",
      "historicalOrigin": "Presente desde los primeros registros del Lazareto en 1869; sistema de autogestión nutricional consolidado en 1983.",
      "pioneeringMilestones": [
        "Atención nutricional ininterrumpida desde las barracas fundacionales de 1869",
        "Primer sistema de carros térmicos y regímenes dietoterápicos en salas hospitalarias",
        "Creación de cámaras frigoríficas especializadas en el sector de calle Venezuela",
        "Atención integral y supervisión de regímenes clínicos y pediátricos"
      ],
      "historicalFigures": [
        "Lic. Graciela Gramisci"
      ]
    },
    {
      "id": "anestesiologia",
      "file": "anestesiologia.html",
      "title": "Anestesiología",
      "category": "Quirúrgica",
      "planImg": "/de/anest.gif",
      "phone": "4127-0200 (Int. 1436)",
      "email": "",
      "chief": "Dra. Roxana Lettini",
      "location": "4to piso Pabellón Cirugía Quirófano Central, Sala de Recuperación Postanestésica y Despacho Jefatura Anestesiología 3er piso Pabellón Cirugía Consultorio de Medicina del Dolor y de Evaluación Preanestésica",
      "detailUrl": "/servicios/anestesiologia.html",
      "historicalOrigin": "Consolidada a partir de los pioneros Juan B. Justo y Andrés Llobet (1890) y el maestro internacional Juan Armando Nesi (1936).",
      "pioneeringMilestones": [
        "Primeras anestesias locales con cocaína en el país por Juan B. Justo (1890)",
        "Creación del primer curso de anestesia del país por el Dr. Juan Armando Nesi (1936)",
        "Fundación de la Asociación Argentina de Anestesiología (1945)",
        "Pabellón quirúrgico central con sala de recuperación postanestésica de alta complejidad"
      ],
      "historicalFigures": [
        "Dr. Juan Armando Nesi",
        "Dr. Jaime Wikinski",
        "Dr. Juan M. Márquez Miranda",
        "Dr. Germán Wernicke"
      ]
    },
    {
      "id": "arancelamiento",
      "file": "arancelamiento.html",
      "title": "Arancelamiento",
      "category": "Institucional y Administrativa",
      "planImg": "/de/arancel.gif",
      "phone": "4127-0200 (Int. 1433)",
      "email": "",
      "chief": "",
      "location": "El servicio de Arancelamiento se encuentra en la planta baja, hall central hacia la derecha.",
      "detailUrl": "/servicios/arancelamiento.html"
    },
    {
      "id": "areaprogramatica",
      "file": "areaprogramatica.html",
      "title": "Area Programática",
      "category": "Comunitaria y APS",
      "planImg": "/de/aprog.gif",
      "phone": "4127-0437 / 4957-2554",
      "email": "ramosmejia_aprogramatica@buenosaires.gov.ar",
      "chief": "Dr. Marcelo Ghioldi",
      "location": "El servicio de Area Programatica se encuentra en el pabellón \"J\", que se encuentra ubicado ingresando al hospital por el pasillo izquierdo hasta el fondo y luego doblando hacia la izquierda. Teléfonos: Office de Enfermería: 4127-0437 Recepción: 4957-2554 Jefatura: 4932-5279",
      "detailUrl": "/servicios/areaprogramatica.html",
      "historicalOrigin": "Creada en 1984 tras la Conferencia de Alma-Ata y conducida desde 1987 por el Prof. Dr. Abel Agüero.",
      "pioneeringMilestones": [
        "Pioneros en Atención Primaria de la Salud (APS) en hospitales generales de la Ciudad",
        "Creación del Centro Carlos Gardel (CeSAC 11 y 45) para abordaje del consumo problemático",
        "Premio y representación internacional en proyectos URBAL de la Unión Europea (2002-2005)",
        "Programa de Salud Escolar y abordaje extramural en asentamientos de Comuna 3"
      ],
      "historicalFigures": [
        "Prof. Dr. Abel Agüero",
        "Dra. Ana María Bou Pérez",
        "Dra. Ana Milanino",
        "Lic. Viviana Kelmanowicz"
      ]
    },
    {
      "id": "bioeticaclinica",
      "file": "bioeticaclinica.html",
      "title": "Bioética Clínica (CBEHRM)",
      "category": "Institucional y Docencia",
      "planImg": "/de/psico.gif",
      "phone": "4127-0200 (Conmutador)",
      "email": "comitebioeticaclinicarm@gmail.com",
      "chief": "",
      "location": "El CBEHRM se encuentra ubicado en el Servicio de Salud Mental del Hospital Ramos Mejía. Las reuniones son el primer y tercer viernes de cada mes en el aula de Salud Mental. Email: Instagram: @comitebioetica_ramosmejia Formulario de consulta: &nbsp; CLICK AQUI",
      "detailUrl": "/servicios/bioeticaclinica.html"
    },
    {
      "id": "bioeticainvestigacion",
      "file": "bioeticainvestigacion.html",
      "title": "Comité de Etica en Investigación (CEI)",
      "category": "Institucional y Docencia",
      "planImg": "/de/orl.gif",
      "phone": "4127-0200 (Int. 1288)",
      "email": "codei_rm@yahoo.com.ar",
      "chief": "",
      "location": "El Comité de Etica en Investigación (CEI) se encuentra en la planta baja del pabellón de Otorrinolaringología, al cual se accede por el pasillo derecho del hospital. Las reuniones son el primer y tercer miércoles de cada mes. .com.ar",
      "detailUrl": "/servicios/bioeticainvestigacion.html"
    },
    {
      "id": "cardiologia",
      "file": "cardiologia.html",
      "title": "Cardiología",
      "category": "Médica",
      "planImg": "/de/cardio.gif",
      "phone": "4127-0200 (Int. 1246)",
      "email": "",
      "chief": "Dr. Justo Carbajales",
      "location": "Cardiologia se encuentra en el pabellón propio que el servicio posee, al cual se accede ingresando al hospital por el pasillo derecho y dirigiéndose luego al ángulo que forman las calles Urquiza y Venezuela.",
      "detailUrl": "/servicios/cardiologia.html",
      "historicalOrigin": "Pabellón Luis H. Inchauspe inaugurado el 24 de septiembre de 1946; cuna de la Escuela Argentina de Electrocardiografía.",
      "pioneeringMilestones": [
        "Primer servicio de cardiología con internación propia de los hospitales de la Ciudad (1946)",
        "Creación de la Escuela Argentina de Electrocardiografía (Dr. Mauricio Rosenbaum, Dr. Marcelo Elizari, Dr. Julio Lázzari)",
        "Descubrimiento de la trifascicularidad del sistema de conducción y publicación de 'The Hemiblocks' (1968)",
        "Pioneros mundiales en el uso de amiodarona como antiarrítmico y estudio del síndrome de Brugada",
        "Primera Unidad Coronaria moderna y equipo de Genómica Cardiológica en el sistema público (2019-2024)"
      ],
      "historicalFigures": [
        "Dr. Mauricio B. Rosenbaum",
        "Dr. Blas Moia",
        "Dr. Eduardo Braun Menéndez",
        "Dr. Marcelo V. Elizari",
        "Dr. Rafael Bullrich"
      ]
    },
    {
      "id": "cardiovascular",
      "file": "cardiovascular.html",
      "title": "Cirugía Cardiovascular",
      "category": "Quirúrgica",
      "planImg": "/de/cardiov.gif",
      "phone": "4127-0200 (Int. 1302)",
      "email": "ccvascular2014@gmail.com",
      "chief": "Dr. Jorge Cociolo",
      "location": "El servicio y consultorio externo de Cirugia Cardiovascular se encuentra en el 1º piso del ala derecha del pabellon quirurgico. .com",
      "detailUrl": "/servicios/cardiovascular.html",
      "historicalOrigin": "Instalado en el hospital en 1978 tras el cierre del Hospital Rawson, bajo la dirección del Dr. Miguel Bellizzi.",
      "pioneeringMilestones": [
        "Vínculo con el primer trasplante cardíaco de Argentina (1968, donante internado en Sala 15 del Ramos Mejía)",
        "Primera colocación de endoprótesis aórtica de balón expandible implantada en el mundo (junio de 1997)",
        "Pioneros en cirugía mininvasiva y endovascular de aneurismas de aorta",
        "Residencia pionera de Cirugía Cardiovascular y servicio de flebología"
      ],
      "historicalFigures": [
        "Dr. Miguel Bellizzi",
        "Dr. Norberto González",
        "Dr. J. Álvarez",
        "Dr. Jorge Cociolo"
      ]
    },
    {
      "id": "cirugia",
      "file": "cirugia.html",
      "title": "Cirugía General",
      "category": "Quirúrgica",
      "planImg": "/de/cirugiaa.gif",
      "phone": "4127-0200 (Int. 1304 / 1107)",
      "email": "cir.div.a@hotmail.com",
      "chief": "Dr. Norberto Lucilli",
      "location": "La División A de Cirugia General se encuentra en el primer piso del pabellón quirúrgico. El consultorio externo Nº 160 se encuentra en el 1er piso, del ala izquierda del pabellón de consultorios externos. Secretario: Leandro Gómez",
      "detailUrl": "/servicios/cirugia.html",
      "historicalOrigin": "II Cátedra de Cirugía de la UBA desde 1887. Sede histórica de los más célebres maestros cirujanos del país.",
      "pioneeringMilestones": [
        "Primera craneotomía osteoplástica con éxito en el mundo realizada por el Dr. Juan B. Justo (1889)",
        "Introducción de la cirugía aséptica en Argentina por Juan B. Justo",
        "Creación de la primera residencia quirúrgica de los hospitales públicos de la Capital (1963, Dr. Jorge Sánchez Zinny)",
        "Sede de la Escuela Quirúrgica Municipal de Graduados (creada por Ricardo Finochietto y trasladada al Ramos en 1984 bajo Dr. Roberto Garriz)",
        "Descripción de la colédoco-oditis escleroretráctil de fama mundial por el Dr. Delfor del Valle (h)"
      ],
      "historicalFigures": [
        "Dr. Juan B. Justo",
        "Dr. Julián Aguilar",
        "Prof. Pedro Chutro",
        "Dr. Jorge Sánchez Zinny",
        "Dr. Roberto A. Garriz",
        "Dr. Alejandro Pavlovsky"
      ]
    },
    {
      "id": "clinica",
      "file": "clinica.html",
      "title": "Clínica Médica, División A",
      "category": "Médica",
      "planImg": "/de/clinicaa.gif",
      "phone": "4127-0200 (Int. 1251 / 1245)",
      "email": "clinicamedicaramosmejia@gmail.com",
      "chief": "Dr. Rodolfo Fernández (Div. A) / Dr. Alberto Guida (Div. B) / Dr. Santiago Ilutovich (Div. C)",
      "location": "La División A de Clínica Médica se encuentra en el 2º piso del pabellón propio que el servicio posee al cual se ingresa por el pasillo izquierdo del hospital. El consultorio externo Nº 143 a 146 se encuentra en el ala izquierda del primer piso del pabellon de consultorios externos. .com",
      "detailUrl": "/servicios/clinica.html",
      "historicalOrigin": "Creado en 1892; organizado en históricas salas de estilo francés (Sala I, Sala XII, Sala XVI).",
      "pioneeringMilestones": [
        "Cuna de las cátedras II y IV de Clínica Médica de la UBA",
        "Pioneros en Ecografía Clínica e Intervencionista guiada por imágenes en 1979 (Dr. Sanguinetti y Dr. Márquez)",
        "Creación del Centro Municipal de Porfiria en 1978 (Dra. Honorina Conti y Dr. Pedro Magnin con CIPYP-CONICET)",
        "Creación de la Sección de Hipertensión Arterial (1994) y Sección Enfermedades Emergentes/VIH (1997)",
        "Tratado fundacional 'Semiología y Semiotecnia' de Lucio y Carlos María Sanguinetti"
      ],
      "historicalFigures": [
        "Dr. Francisco Sicardi",
        "Dr. Abelardo Casas",
        "Dr. Rafael A. Bullrich",
        "Prof. Lucio Sanguinetti",
        "Dr. Marcelo Torino"
      ]
    },
    {
      "id": "codei",
      "file": "codei.html",
      "title": "Comité de Docencia",
      "category": "Institucional y Docencia",
      "planImg": "/de/orl.gif",
      "phone": "4127-0200 (Int. 1439)",
      "email": "codei_rm@yahoo.com.ar",
      "chief": "",
      "location": "El Comité de Docencia se encuentra en la planta baja del pabellón de Otorrinolaringología, al cual se accede por el pasillo derecho del hospital. .com.ar",
      "detailUrl": "/servicios/codei.html"
    },
    {
      "id": "contacto",
      "file": "contacto.html",
      "title": "Contacto",
      "category": "Institucional y Administrativa",
      "planImg": "",
      "phone": "4127-0200 (Conmutador)",
      "email": "",
      "chief": "",
      "location": "-Si vive en CABA comunicarse al 147 -Si vive en Provincia de Buenos Aires al 0800-999-2727",
      "detailUrl": "/servicios/contacto.html"
    },
    {
      "id": "cplastica",
      "file": "cplastica.html",
      "title": "Cirugía Plástica",
      "category": "Quirúrgica",
      "planImg": "/de/plastica.gif",
      "phone": "4127-0200 (Int. 1312 / 1313)",
      "email": "",
      "chief": "Dra. Nora Petralli",
      "location": "El servicio de Cirugía Plástica se encuentra en el 1er y 3er piso, ala izquierda del pabellón quirúrgico.",
      "detailUrl": "/servicios/cplastica.html",
      "historicalOrigin": "Iniciada en los años 40 por el Dr. Ernesto Malbec; refundada en 1978 con el equipo del Hospital Rawson (Dr. Cerisola).",
      "pioneeringMilestones": [
        "Cuna formativa del Dr. Fortunato Benaim (pionero en medicina de quemados en Argentina)",
        "Visita operatoria histórica del célebre cirujano británico Sir Harold Gillies",
        "Primera residencia de Cirugía Plástica municipal y creación de la División de Cirugía Plástica y Reparadora (1978)",
        "Creación de la Carrera de Especialistas Universitarios de la UBA (2010)"
      ],
      "historicalFigures": [
        "Dr. Ernesto Malbec",
        "Dr. José Alberto Cerisola",
        "Dr. Manuel Viñal",
        "Dr. Fortunato Benaim"
      ]
    },
    {
      "id": "dermatologia",
      "file": "dermatologia.html",
      "title": "Dermatología",
      "category": "Médica",
      "planImg": "/de/dermato.gif",
      "phone": "4127-0200 (Int. 1012 / 1264)",
      "email": "",
      "chief": "Dr. David Muhafra",
      "location": "La sala de internación y consultorios externos de Dermatología se encuentran en el segundo piso del primer pabellón ingresando por el pasillo izquierdo del hospital Teléfono: 4127022 interno 1012, Dermatología infantil: interno 1264",
      "detailUrl": "/servicios/dermatologia.html",
      "historicalOrigin": "Fundado en 1892 en la Sala XIV bajo la jefatura del Prof. Dr. Baldomero Sommer, padre de la dermatología argentina.",
      "pioneeringMilestones": [
        "Primer servicio de Dermatología de Argentina (1892)",
        "Fundación de la Sociedad Dermatológica Argentina en la Sala XIV (21 de agosto de 1907)",
        "Sanción de la Ley Aberastury de profilaxis contra la lepra impulsada desde el hospital",
        "Gestión histórica del Prof. Dr. Pedro Horacio Magnin: 17 subespecialidades, poliquimioterapia de la OMS (1981) y búsqueda activa de lepra y melanoma",
        "Maestro de la Medicina Argentina galardonado junto a René Favaloro (1986)"
      ],
      "historicalFigures": [
        "Prof. Dr. Baldomero Sommer",
        "Prof. Dr. Pedro L. Baliña",
        "Prof. Dr. Marcial Quiroga",
        "Prof. Dr. Pedro Horacio Magnin"
      ]
    },
    {
      "id": "endocrinologia",
      "file": "endocrinologia.html",
      "title": "Endocrinología",
      "category": "Médica",
      "planImg": "/de/endoc.gif",
      "phone": "4127-0200 (Int. 1266 / 1458)",
      "email": "endocrinologiaramosmejia@gmail.com",
      "chief": "Dra. Alicia Gauna",
      "location": "Endocrinología se encuentra en la mitad del pasillo izquierdo del hospital Teléfono del servicio: 41270200 interno 1266 Teléfono del laboratorio de endocrinología: 41270200 interno 1458",
      "detailUrl": "/servicios/endocrinologia.html",
      "historicalOrigin": "Incorporado en 1978 tras el cierre del Hospital Rawson, conducido por el Dr. Roberto Soto y el Dr. Gerardo Sartorio.",
      "pioneeringMilestones": [
        "Primera Residencia de Endocrinología en adultos de Argentina (1971)",
        "Desarrollo del método de medición de tiroglobulina como marcador del cáncer tiroideo",
        "Pioneros en la medición neonatal de TSH para pesquisa de hipotiroidismo congénito en Argentina",
        "Creación del Servicio de Medicina Nuclear independiente (1982)",
        "Centro de referencia latinoamericano en patología tiroidea y metabólica"
      ],
      "historicalFigures": [
        "Dr. Bernardo Houssay",
        "Dr. Rodolfo Pasqualini",
        "Dr. Roberto Soto",
        "Dr. Gerardo Sartorio",
        "Dr. Antonio Codevilla"
      ]
    },
    {
      "id": "enfermeria",
      "file": "enfermeria.html",
      "title": "Enfermería",
      "category": "Cuidados y Apoyo",
      "planImg": "/de/arancel.gif",
      "phone": "4127-0200 (Int. 1292)",
      "email": "",
      "chief": "Lic. Hilda Fernández",
      "location": "El Departamento de Enfermería se encuentra en el inicio del pasillo derecho del hospital. Teléfono del servicio: 41270200 interno 1292",
      "detailUrl": "/servicios/enfermeria.html",
      "historicalOrigin": "Inspirado por la Dra. Cecilia Grierson tras la epidemia de cólera de 1886; primera Escuela de Enfermeras de América Latina.",
      "pioneeringMilestones": [
        "Creación de la primera Escuela de Enfermeras laica y mixta de América Latina por Cecilia Grierson (1886)",
        "Instauración del uso obligatorio del uniforme hospitalario y plan de estudios formal",
        "Implementación del 'Plan Piloto' de recuperación de funciones en quirófanos centrales (1986)",
        "Departamento hospitalario con más de 600 profesionales de enfermería en la actualidad"
      ],
      "historicalFigures": [
        "Dra. Cecilia Grierson",
        "Srta. Susana Sánchez (primera jefa 1961)",
        "Lic. Viviana Fernández",
        "Lic. Hilda Fernández"
      ]
    },
    {
      "id": "epilepsia",
      "file": "epilepsia.html",
      "title": "Epilepsia",
      "category": "Médica y Neurociencias",
      "planImg": "/de/neuro.gif",
      "phone": "4127-0200 (Int. 1096 / 1233)",
      "email": "ramosmejiaepilepsia@gmail.com",
      "chief": "Dra. Silvia Kochen / Prof. Dr. Eduardo Seoane",
      "location": "Unidad de Video - EEG: 1er piso. Sala de Neurología. Consultorios Externos: 1er piso. Consultorios 150, 151 y 156 .com",
      "detailUrl": "/servicios/epilepsia.html",
      "historicalOrigin": "Integrado en el Centro de Neurociencias y Neurocirugía del Hospital Ramos Mejía.",
      "pioneeringMilestones": [
        "Centro de referencia nacional único en cirugía de epilepsia del adulto",
        "Unidad de Video-Electroencefalografía (Video-EEG) y monitoreo invasivo prequirúrgico",
        "Abordajes microquirúrgicos guiados por neuronavegación y mapeo cortical",
        "Investigación traslacional conjunta UBA - CONICET en epilepsia refractaria"
      ],
      "historicalFigures": [
        "Dra. Silvia Kochen",
        "Prof. Dr. Eduardo Seoane"
      ]
    },
    {
      "id": "faq",
      "file": "faq.html",
      "title": "Preguntas frecuentes",
      "category": "Información al Paciente",
      "planImg": "",
      "phone": "Línea 147 (GCABA) / 4127-0200",
      "email": "",
      "chief": "",
      "location": "",
      "detailUrl": "/servicios/faq.html"
    },
    {
      "id": "farmacia",
      "file": "farmacia.html",
      "title": "Farmacia",
      "category": "Diagnóstico y Tratamiento",
      "planImg": "/de/farmacia.gif",
      "phone": "4127-0200 (Int. 1349 / 1350)",
      "email": "",
      "chief": "División Farmacia Hospitalaria",
      "location": "Farmacia se encuentra ingresando al hospital y girando hacia la derecha desde el hall central.",
      "detailUrl": "/servicios/farmacia.html",
      "historicalOrigin": "Presente como botica de madera desde 1869 en el Lazareto; pabellón propio consolidado a principios del siglo XX.",
      "pioneeringMilestones": [
        "Primera área de Atención Farmacéutica a pacientes con VIH/SIDA de la Ciudad (1996)",
        "Área de Reconstitución Centralizada de Citostáticos en condiciones de bioseguridad (2014)",
        "Pioneros en esterilización hospitalaria por peróxido de hidrógeno evaporado",
        "Museo histórico propio de instrumental y formulaciones farmacéuticas de época"
      ],
      "historicalFigures": [
        "Dr. José F. Bruquetas (1929)",
        "Farm. Juan Ramos",
        "Farm. Stella Trosman",
        "Farm. Haydée Pérez"
      ]
    },
    {
      "id": "fonoaudiologia",
      "file": "fonoaudiologia.html",
      "title": "Fonoaudiología",
      "category": "Apoyo y Rehabilitación",
      "planImg": "/de/orl.gif",
      "phone": "4127-0200 (Int. 1324)",
      "email": "",
      "chief": "",
      "location": "El servicio de Fonoaudiología se encuentra en el pabellón de otorrinolaringologia, al cual se accede por el pasillo derecho del hospital.",
      "detailUrl": "/servicios/fonoaudiologia.html"
    },
    {
      "id": "gastroenterologia",
      "file": "gastroenterologia.html",
      "title": "Gastroenterología",
      "category": "Médica",
      "planImg": "/de/gastro.gif",
      "phone": "4127-0200 (Int. 1269 / 1299)",
      "email": "",
      "chief": "Dr. Eduardo José Marini (Unidad) / Dr. Fabián Precetti (Endoscopía)",
      "location": "El Servicio de Gastroenterología se encuentra en el tercer piso del pabellón quirúrgico. El consultorio externo se encuentra en el 1er piso, del ala izquierda del pabellón de consultorios externos.",
      "detailUrl": "/servicios/gastroenterologia.html",
      "historicalOrigin": "Surgido de la Sala XII con el Dr. Carlos Bonorino Udaondo (1929) y el Instituto del Prof. Rafael Bullrich.",
      "pioneeringMilestones": [
        "Presencia fundacional del Dr. Carlos Bonorino Udaondo, prócer de la gastroenterología argentina",
        "Pioneros de la endoscopía digestiva en Argentina impulsados por el Dr. Juan Carlos Baccaro y Dr. Aldo De Paula (1978)",
        "Creación de la Cátedra de Poli-endoscopía de la UBA",
        "Sede académica UBA con residencia médica e intervencionismo endoscópico de avanzada"
      ],
      "historicalFigures": [
        "Dr. Carlos Bonorino Udaondo",
        "Prof. Delfor del Valle (h)",
        "Dr. Aldo De Paula",
        "Dr. Juan Carlos Baccaro"
      ]
    },
    {
      "id": "genetica",
      "file": "genetica.html",
      "title": "Genética",
      "category": "Diagnóstico y Tratamiento",
      "planImg": "/de/cardiov.gif",
      "phone": "4127-0200 (Int. 1287)",
      "email": "rabronberg@intramed.net",
      "chief": "",
      "location": "Genética se encuentra en el segundo piso del pabellón quirúrgico. Email",
      "detailUrl": "/servicios/genetica.html"
    },
    {
      "id": "geriatria",
      "file": "geriatria.html",
      "title": "Geriatría",
      "category": "Médica",
      "planImg": "/de/geriat.gif",
      "phone": "4127-0200 (Int. 1256)",
      "email": "Geriatriaramosmejia@gmail.com",
      "chief": "Dra. Maya Sinjovich",
      "location": "El Servicio de Geriatría se encuentra en el primer piso del pabellón de Clínica Medica. El Consultorio externo se encuentra en la puerta Nº 119 del primer piso del pabellon de consultorios externos. .com",
      "detailUrl": "/servicios/geriatria.html",
      "historicalOrigin": "Creada en 1979 por el Dr. Ángel Papeschi tras el cierre compulsivo del Hospital Martín Rodríguez durante la dictadura.",
      "pioneeringMilestones": [
        "Implementación del Plan Gerontológico Municipal adaptando el modelo británico de agudos (1979)",
        "Primer curso de formación de asistentes domiciliarios para adultos mayores",
        "Residencia médica de Geriatría (2006) y sede de la Carrera de Especialistas de la UBA",
        "Abordaje de geriatría transversal (oncogeriatría, ortogeriatría y talleres de calidad de vida)"
      ],
      "historicalFigures": [
        "Dr. Ángel Papeschi",
        "Dr. Hadid",
        "Dra. Maya Sinjovich"
      ]
    },
    {
      "id": "ginecologia",
      "file": "ginecologia.html",
      "title": "Ginecología",
      "category": "Materno-Infantil",
      "planImg": "/de/gineco.gif",
      "phone": "4127-0200 (Int. 1084)",
      "email": "",
      "chief": "Dra. Stella Maris Raya",
      "location": "El Servicio de Ginecología se encuentra en el 2º piso, ala derecha del Pabellón Quirúrgico El Consultorio de Patología Mamaria y el Consultorio de Patología del Tracto Genital Inferior (Colposcopía), se encuentran en el 2º piso Pabellón Quirúrgico El resto de los consultorios externos del Nº 116, 119, 120, 122, 123, 124 y 126, se encuentran en el 1º piso, ala derecha del Pabellón de Consultorios externos",
      "detailUrl": "/servicios/ginecologia.html",
      "historicalOrigin": "Inaugurado en 1892 junto con la Maternidad 'Dr. Eliseo Cantón', abriendo por primera vez la atención hospitalaria a mujeres.",
      "pioneeringMilestones": [
        "Primera cesárea exitosa en un hospital público argentino realizada por Cecilia Grierson y Alfredo Lagarde (septiembre 1892)",
        "Invención de la sinfisiotomía subcutánea de Zárate por el Prof. Enrique Zárate",
        "Maternidad histórica con torno de expósitos y quirófano vidriado para docencia",
        "Pioneros en screening molecular de HPV, colposcopía y cirugía laparoscópica e histeroscópica"
      ],
      "historicalFigures": [
        "Dra. Cecilia Grierson",
        "Prof. Enrique Zárate",
        "Prof. Osvaldo L. Bottaro",
        "Dr. Eliseo Cantón"
      ]
    },
    {
      "id": "hematologia",
      "file": "hematologia.html",
      "title": "Hematología",
      "category": "Médica",
      "planImg": "/de/hemato.gif",
      "phone": "4127-0200 (Int. 1461)",
      "email": "",
      "chief": "Dra. Miriam Arias / Dra. Irene Rey",
      "location": "Hematología se encuentra en el pabellón propio que el servicio posee, al cual se accede por el pasillo izquierdo del hospital.",
      "detailUrl": "/servicios/hematologia.html",
      "historicalOrigin": "Instituto Municipal de Hematología (Sala 18), consolidado en los años 50 bajo el liderazgo del Dr. Gregorio Bomchil.",
      "pioneeringMilestones": [
        "Conocida históricamente como la 'Sala Semillero de la Hematología Argentina'",
        "Descubrimiento mundial de la 'Hemoglobina Buenos Aires' por la Dra. Beatriz Iparraguirre (1973)",
        "Primer centro de derivación del país para exanguinotransfusión neonatal",
        "Primer laboratorio de radioisótopos hospitalario con la Comisión Nacional de Energía Atómica (1958)",
        "Únicas salas de internación pública para adultos de la especialidad en la Ciudad de Buenos Aires"
      ],
      "historicalFigures": [
        "Dr. Luis Agote",
        "Dr. Luis Demarval",
        "Dr. Gregorio Bomchil",
        "Dra. Beatriz Iparraguirre",
        "Dr. Daniel Catovsky"
      ]
    },
    {
      "id": "hemoterapia",
      "file": "hemoterapia.html",
      "title": "Hemoterapia",
      "category": "Diagnóstico y Tratamiento",
      "planImg": "/de/endoc.gif",
      "phone": "4127-0200 (Int. 1270)",
      "email": "hemo.rm@gmail.com",
      "chief": "Dra. Inés Ferniot / Bioq. Graciela Daleoso",
      "location": "El servicio de Hemoterapia se encuentra en el pabellon \"E\", al cual se accede por el pasillo izquierdo del hospital.",
      "detailUrl": "/servicios/hemoterapia.html",
      "historicalOrigin": "Vinculado al hito histórico del Dr. Luis Agote (1914), formalizado como servicio hospitalario en los años 50.",
      "pioneeringMilestones": [
        "El paciente de la primera transfusión de sangre citratada del mundo (Dr. Luis Agote, 9 de noviembre de 1914) provino del Ramos Mejía",
        "Pioneros en seguridad transfusional con determinación obligatoria de grupo sanguíneo ABO al pie de cama",
        "Soporte transfusional y aféresis de avanzada para el primer trasplante de médula ósea en 1986",
        "Unidad moderna con guardias 24hs, biología molecular y certificación de calidad con quimioluminiscencia"
      ],
      "historicalFigures": [
        "Dr. Luis Agote",
        "Dr. Ceancio",
        "Dr. Juan Víctor Morando",
        "Dra. Inés Ferniot"
      ]
    },
    {
      "id": "hepatologia",
      "file": "hepatologia.html",
      "title": "Hepatología",
      "category": "Médica",
      "planImg": "/de/geriat.gif",
      "phone": "4127-0200 (Int. 1256)",
      "email": "hepatoramos@gmail.com",
      "chief": "",
      "location": "El Grupo de Hepatología se encuentra en el consultorio Nro 114 del ala izquierda del pabellón de consultorios externos. Teléfono: Email",
      "detailUrl": "/servicios/hepatologia.html"
    },
    {
      "id": "hipertensionarterial",
      "file": "hipertensionarterial.html",
      "title": "Hipertensión arterial",
      "category": "Médica",
      "planImg": "/de/clinicab.gif",
      "phone": "4127-0200 (Int. 1251)",
      "email": "htaramosmejia@gmail.com",
      "chief": "Dr. Gustavo Carusso",
      "location": "El Servicio de Hipertension Arterial se encuentra en el primer piso del pabellón Clínica Medica. El consultorio externo 125 de Hipertensión Arterial se encuentra en el primer piso ala izquierda del pabellón Consultorios Externos. .com",
      "detailUrl": "/servicios/hipertensionarterial.html",
      "historicalOrigin": "Creada en 1994 por el Dr. Gustavo Carusso y el Dr. Luis Gioseffi en Clínica Médica.",
      "pioneeringMilestones": [
        "Primer Grupo de Trabajo de Hipertensión Arterial del Gobierno de la Ciudad (1994)",
        "Primera Sección de Hipertensión Arterial oficializada del ámbito público de la CABA (2023)",
        "Centro de referencia en evaluación hemodinámica no invasiva y rigidez arterial",
        "Primera concurrencia post-básica en hipertensión arterial del sistema municipal"
      ],
      "historicalFigures": [
        "Dr. Gustavo Carusso",
        "Dr. Luis Gioseffi",
        "Dra. Mariana Pérez",
        "Dr. Diego Fernández"
      ]
    },
    {
      "id": "imagenes",
      "file": "imagenes.html",
      "title": "Diagnóstico por Imágenes",
      "category": "Diagnóstico por Imágenes",
      "planImg": "/de/rayos.gif",
      "phone": "4127-0200 (Int. 1372)",
      "email": "turnosrxramosmejia@gmail.com",
      "chief": "Dr. Sebastián Pérez Espinosa",
      "location": "Diagnostico por Imagenes se encuentra en el pabellon propio que el servicio posee, al cual se accede ingresando al hospital por el hall central y doblando a la izquierda. Teléfonos: Ecografia, Doppler y Tomografía 4127-0200 interno 1372. Mamografía: 147",
      "detailUrl": "/servicios/imagenes.html",
      "historicalOrigin": "Pabellón Luis Mariano Zuberbühler inaugurado en 1942, proyectado por el Dr. Pedro Abel Maissa.",
      "pioneeringMilestones": [
        "Sala pionera de radiografía circa 1910 y fundación de la Sociedad Argentina de Radiología (1917)",
        "Creación de la carrera de Médico y Técnico Radiólogo Universitario por el Dr. Pedro Maissa (1958)",
        "Liderazgo histórico de la Prof. Dra. Gloria Díaz (Maestra de la Radiología Argentina y pionera en angiografía)",
        "Modernización integral con sistema PACS, mamografía digital, ecodoppler y tomografía multicorte"
      ],
      "historicalFigures": [
        "Dr. Pedro Abel Maissa",
        "Dra. Gloria Díaz",
        "Dr. César Gotta",
        "Dr. Mario Martella"
      ]
    },
    {
      "id": "inmunocomprometidos",
      "file": "inmunocomprometidos.html",
      "title": "Inmunocomprometidos",
      "category": "Cuidados Críticos",
      "planImg": "/de/clinicaa.gif",
      "phone": "4127-0200 (Int. 1251)",
      "email": "secretaria@hivramos.org.ar",
      "chief": "Prof. Dr. Marcelo H. Losso",
      "location": "El Servicio de Inmunocomprometidos se encuentra en 2º piso del pabellon de Clinica Medica ingresando por el pasillo izquierdo del hospital. El consultorio externo Nº 154 y 155 se encuentra en 1º piso del pabellon de consultorios externos del hospital. .org.ar",
      "detailUrl": "/servicios/inmunocomprometidos.html",
      "historicalOrigin": "Creada formalmente por Decreto 81/23 como continuidad del Grupo de Trabajo de 1997 vinculado a la Fundación IBIS.",
      "pioneeringMilestones": [
        "Centro de referencia nacional e internacional en VIH/SIDA y patologías emergentes",
        "Centro de Testeo CePAD (más de 60.000 testeos) y clínica de prevención combinada ClinSex (PrEP)",
        "Participación en ensayos clínicos de impacto mundial (SMART, START, PROMISE) publicados en NEJM y Lancet",
        "Sede de la Residencia de Investigación en Salud del GCBA y posgrado UBA",
        "Desarrollo de ensayos de vacunas y tratamientos durante la pandemia COVID-19 con financiamiento de los NIH"
      ],
      "historicalFigures": [
        "Prof. Dr. Marcelo H. Losso",
        "Dr. Carlos A. Sanguinetti"
      ]
    },
    {
      "id": "jornadas",
      "file": "jornadas.html",
      "title": "Jornadas Científicas Multidisciplinarias (Edición 2026)",
      "category": "Institucional y Docencia",
      "planImg": "",
      "phone": "4127-0200 (Int. 1439)",
      "email": "",
      "chief": "",
      "location": "Comité Organizador de las Jornadas Multidisciplinarias y de Enfermería del Hospital Ramos Mejía (Año 2026). Sede: Aula Magna y Auditorio Central. Informes e inscripciones en la Secretaría del CODEI (Tel: 4127-0200 Int. 1439).",
      "detailUrl": "/servicios/jornadas.html"
    },
    {
      "id": "kinesiologia",
      "file": "kinesiologia.html",
      "title": "Kinesiología",
      "category": "Apoyo y Rehabilitación",
      "planImg": "/de/kin.gif",
      "phone": "4127-0200 (Int. 1324)",
      "email": "",
      "chief": "Lic. Mónica Pugliese",
      "location": "Ubicación 3° Piso ala izquierda Pabellón Quirúrgico: consultorios externos y gimnasio Subsuelo ala derecha Pabellón Quirúrgico: gimnasio de Rehabilitación Cardio-Pulmonar",
      "detailUrl": "/servicios/kinesiologia.html",
      "historicalOrigin": "Antecedentes en 1897 con el libro 'Masaje práctico' de Cecilia Grierson; servicio consolidado en los años 50.",
      "pioneeringMilestones": [
        "Primeros cursos de 'Gimnasia Médica y Quinesioterapia' dictados en el país por Cecilia Grierson (1904)",
        "Servicio de Masajes activo en el Ramos Mejía documentado desde 1929",
        "Creación de los grupos multidisciplinarios de Rehabilitación Respiratoria y transición en Mielomeningocele",
        "Incorporación pionera de kinesiólogos de guardia permanente las 24 horas en áreas críticas"
      ],
      "historicalFigures": [
        "Dra. Cecilia Grierson",
        "Dr. Kaplan",
        "Lic. Marta Almeida",
        "Lic. Mónica Pugliese"
      ]
    },
    {
      "id": "laboratorio",
      "file": "laboratorio.html",
      "title": "Laboratorio",
      "category": "Diagnóstico y Tratamiento",
      "planImg": "/de/laborat.gif",
      "phone": "4127-0200 (Int. 1347 / 1348)",
      "email": "",
      "chief": "Lic. Gabriela Razzitte (Depto.) / Bioq. Susana Ravea (Div. Análisis Clínicos)",
      "location": "El Servicio se encuentra ubicado en la Planta Baja, entre los pabellones de la Guardia Médica y Endocrinología. Comparte sus instalaciones con la Unidad Parasitología y el Laboratorio de Urgencias.",
      "detailUrl": "/servicios/laboratorio.html",
      "historicalOrigin": "Laboratorio Bacteriológico creado en 1886 bajo Susini, Méndez y Malbrán; edificio central inaugurado en 1960.",
      "pioneeringMilestones": [
        "Investigación fundacional de cólera, tuberculosis y carbunclo por Telémaco Susini y Carlos Malbrán (1886)",
        "Más de 1.300.000 determinaciones anuales con 20 autoanalizadores de última generación y normas ISO 15189",
        "Unidad de Parasitología histórica (Dr. Garaguso, 1979) única en realizar xenodiagnóstico en CABA",
        "Sección de Micología Médica de referencia continental liderada por la Dra. Roxana Vitale (CONICET - NIH)"
      ],
      "historicalFigures": [
        "Dr. Telémaco Susini",
        "Dr. Carlos Malbrán",
        "Dr. Pedro Garaguso",
        "Dra. Roxana G. Vitale"
      ]
    },
    {
      "id": "medicinadeldeporte",
      "file": "medicinadeldeporte.html",
      "title": "Medicina del Deporte",
      "category": "Médica",
      "planImg": "/de/psico.gif",
      "phone": "4127-0200 (Int. 1287)",
      "email": "",
      "chief": "Unidad Medicina del Deporte (Área Programática)",
      "location": "El servicio de Medicina del Deporte se encuentra en el pabellón de Area Programática que se encuentra ubicado ingresando al hospital por el pasillo izquierdo hasta el fondo y luego doblando hacia la izquierda.",
      "detailUrl": "/servicios/medicinadeldeporte.html",
      "historicalOrigin": "Iniciada en los años 60 por el Dr. Blanco en el sótano del hospital; consolidada en los años 90.",
      "pioneeringMilestones": [
        "Convenio histórico y único en el mundo con el Teatro Colón para el estudio de bailarines de élite (1993)",
        "Primera antropometría con fraccionamiento de masas corporales junto al Dr. William Ross",
        "Publicación de los libros de referencia 'Un siglo de Salud Escolar' y 'La Salud en Danza'",
        "Centro de referencia nacional en evaluación morfológica y aptitud física deportiva"
      ],
      "historicalFigures": [
        "Dr. Blanco",
        "Dr. William Ross"
      ]
    },
    {
      "id": "medicinanuclear",
      "file": "medicinanuclear.html",
      "title": "Medicina Nuclear",
      "category": "Diagnóstico por Imágenes",
      "planImg": "/de/endoc.gif",
      "phone": "4127-0200 (Int. 1366 / 1367)",
      "email": "",
      "chief": "",
      "location": "Medicina Nuclear se encuentra en la planta baja de la mitad del pasillo izquierdo del hospital",
      "detailUrl": "/servicios/medicinanuclear.html"
    },
    {
      "id": "medicinapaliativa",
      "file": "medicinapaliativa.html",
      "title": "Medicina Paliativa",
      "category": "Médica y Cuidados",
      "planImg": "/de/onco.gif",
      "phone": "4127-0200 (Int. 1251)",
      "email": "",
      "chief": "",
      "location": "El Grupo de Trabajo en Medicina Paliativa se encuentra en el subsuelo del pabellón de Diagnóstico por Imágenes.",
      "detailUrl": "/servicios/medicinapaliativa.html"
    },
    {
      "id": "nefrologia",
      "file": "nefrologia.html",
      "title": "Nefrología",
      "category": "Médica",
      "planImg": "/de/geriat.gif",
      "phone": "4127-0200 (Int. 1248)",
      "email": "",
      "chief": "Dr. Cristian Kramer",
      "location": "El consultorio de Nefrología se encuentra en el primer piso, puerta Nº 123 del pabellón de consultorios externos.",
      "detailUrl": "/servicios/nefrologia.html",
      "historicalOrigin": "Iniciada en los años 70 en la Clínica Médica C por el Dr. Héctor Marone y Dr. Mauricio Manguel.",
      "pioneeringMilestones": [
        "Pioneros en biopsias renales por punción con aguja Vim Silverman en Argentina",
        "Primeras diálisis peritoneales y hemodiálisis agudas en el hospital (1979)",
        "Enseñanza de la biopsia renal guiada por ecografía junto a Sanguinetti y Márquez",
        "Formación académica continua en UBA, UCA y la Sociedad Argentina de Nefrología"
      ],
      "historicalFigures": [
        "Dr. Héctor Marone",
        "Dr. Cristian Kramer",
        "Dr. Roberto Ocáriz",
        "Dra. Diana Miserendino"
      ]
    },
    {
      "id": "neonatologia",
      "file": "neonatologia.html",
      "title": "Neonatología",
      "category": "Materno-Infantil",
      "planImg": "/de/neonat.gif",
      "phone": "4127-0200 (Int. 1384)",
      "email": "",
      "chief": "Dra. Mónica Rebagliati",
      "location": "El Servicio de Neonatologia se encuentra en el segundo piso del pabellon cirugia",
      "detailUrl": "/servicios/neonatologia.html",
      "historicalOrigin": "Fundada en 1967 por el Dr. Juan Carlos Mercau en la Maternidad Eliseo Cantón.",
      "pioneeringMilestones": [
        "Único hospital general de agudos que formó médicos en la especialidad desde sus inicios",
        "Primer cierre de ductus arterioso permeable en un recién nacido en un hospital de agudos (1994, Dr. Cornejo)",
        "Atención integral con terapia intensiva neonatal, internación conjunta y consultorio de seguimiento",
        "Equipo multidisciplinario con genética, cardiología infantil, neurología y neurodesarrollo"
      ],
      "historicalFigures": [
        "Dr. Juan Carlos Mercau (padre)",
        "Dr. Horacio Olive",
        "Dr. Carlos Mercau (hijo)",
        "Dra. Mónica Rebagliati"
      ]
    },
    {
      "id": "neumotisiologia",
      "file": "neumotisiologia.html",
      "title": "Neumotisiología",
      "category": "Médica",
      "planImg": "/de/neumo.gif",
      "phone": "4127-0200 (Int. 1118)",
      "email": "neumotisiologia.ramosmejia@gmail.com",
      "chief": "Dr. Martín Sívori",
      "location": "El servicio Neumotisiologia y los consultorios para practicas especializadas se encuentra en 2º y 3º piso del pabellón de Clinica Medica. El consultorio externo Nº 118 se encuentra en el ala izquierda del primer piso del pabellon de consultorios externos. Instagram: @neumoramos2019",
      "detailUrl": "/servicios/neumotisiologia.html",
      "historicalOrigin": "Creada en 1979 por el Dr. Eduardo Herrmann; continuada por el Dr. César Sáenz y el Dr. Martín Sívori.",
      "pioneeringMilestones": [
        "Única Unidad de Neumotisiología con internación en un hospital general de la Ciudad (1979)",
        "Creación del Centro Universitario de Neumonología 'Dr. J.M. Ramos Mejía' de la UBA (2020)",
        "Residencia de Neumonología categoría A de excelencia nacional",
        "Más de 200 publicaciones científicas indexadas y laboratorio pulmonar con fibrobroncoscopía de última generación"
      ],
      "historicalFigures": [
        "Dr. Eduardo A. Herrmann",
        "Dr. César Sáenz",
        "Dr. Martín Sívori",
        "Dra. Mónica Jajati"
      ]
    },
    {
      "id": "neurocirugia",
      "file": "neurocirugia.html",
      "title": "Neurocirugía",
      "category": "Quirúrgica",
      "planImg": "/de/neurocir.gif",
      "phone": "4127-0200 (Int. 1123)",
      "email": "neurocirugia.ramos@yahoo.com.ar",
      "chief": "Prof. Dr. Eduardo Seoane",
      "location": "El servicio de Neurocirugia se encuentra en el primer piso, ala izquierda del pabellon quirurgico.",
      "detailUrl": "/servicios/neurocirugia.html",
      "historicalOrigin": "Iniciada en 1889 por el Dr. Juan B. Justo; consolidada por Delfor del Valle, Eurnekian y Seoane.",
      "pioneeringMilestones": [
        "Primera craneotomía osteoplástica con éxito en el mundo realizada por Juan B. Justo (1889)",
        "Primera laminectomía en Argentina y técnica del 'parto hidatídico' de Ernesto Dowling",
        "Primer abordaje transcraneal para tumores de hipófisis en 1923 (Dr. Delfor del Valle h)",
        "Centro de referencia nacional único en cirugía de epilepsia del adulto y base de cráneo endoscópica",
        "Creación del Instituto de Neurocirugía de la UBA con sede en el Hospital Ramos Mejía (2011)"
      ],
      "historicalFigures": [
        "Dr. Juan B. Justo",
        "Dr. Delfor del Valle (h)",
        "Dr. Ernesto Dowling",
        "Dr. Alberto Eurnekian",
        "Dr. Jorge Salvat",
        "Prof. Dr. Eduardo Seoane"
      ]
    },
    {
      "id": "neurologia",
      "file": "neurologia.html",
      "title": "Neurología",
      "category": "Médica y Neurociencias",
      "planImg": "/de/neuro.gif",
      "phone": "4127-0200 (Int. 1233)",
      "email": "",
      "chief": "Prof. Dr. Raúl Rey",
      "location": "El servicio de Neurologia se encuentra en 1º piso del primer pabellon del pasillo izquierdo del hospital. El consultorio externo Nº 152 se encuentra en el ala izquierda del primer piso del pabellon de consultorios externos.",
      "detailUrl": "/servicios/neurologia.html",
      "historicalOrigin": "Cátedra creada en 1887 por el Dr. José María Ramos Mejía, la 2.ª cátedra de Neurología del mundo.",
      "pioneeringMilestones": [
        "Segunda cátedra de Enfermedades Nerviosas del mundo (1887), tras la de Charcot en París (1882)",
        "Primera descripción mundial de la enfermedad de Wilson en el Ramos Mejía por el Dr. Rómulo Chiappori",
        "Aportes neuroanatómicos universales del Prof. Christofredo Jakob",
        "Liderazgo del Dr. Roberto Sica: célebres 'Ateneos de los Jueves' y 172 publicaciones indexadas en PubMed",
        "Único centro público con internación neurológica diferenciada y primera Unidad de Cuidados Cerebrovasculares (ACV) del país"
      ],
      "historicalFigures": [
        "Dr. José María Ramos Mejía",
        "Dr. José Ingenieros",
        "Prof. Christofredo Jakob",
        "Dr. Roberto E. Sica",
        "Prof. Dr. Raúl Rey"
      ]
    },
    {
      "id": "nutricion",
      "file": "nutricion.html",
      "title": "Nutrición y Diabetes",
      "category": "Médica",
      "planImg": "/de/nut.gif",
      "phone": "4127-0200 (Int. 1333)",
      "email": "",
      "chief": "Servicio de Nutrición y Diabetes",
      "location": "El servicio de Nutrición y Diabetes se encuentra en el consultorio 151 del ala izquierda del pabellón de consultorios externos.",
      "detailUrl": "/servicios/nutricion.html",
      "historicalOrigin": "Dirigido históricamente por el Dr. Pedro Tesone (1980-1993), discípulo de Pedro Escudero.",
      "pioneeringMilestones": [
        "Vínculo directo con la escuela de Pedro Escudero a través de Pedro Tesone y Pedro Landabure",
        "Creación de la Red de Diabetes de la Ciudad de Buenos Aires",
        "Dirección de la Carrera de Médicos Especialistas en Nutrición de la UBA",
        "Conexión histórica única: una nieta del Premio Nobel Bernardo Houssay integra actualmente su plantel médico"
      ],
      "historicalFigures": [
        "Dr. Pedro Tesone",
        "Dr. Julio Bragagnolo",
        "Dr. Pedro Escudero"
      ]
    },
    {
      "id": "obstetricia",
      "file": "obstetricia.html",
      "title": "Obstetricia",
      "category": "Materno-Infantil",
      "planImg": "/de/obste.gif",
      "phone": "4127-0200 (Int. 1260)",
      "email": "",
      "chief": "Dr. Muñoz Álvarez",
      "location": "El Servicio de Obstetricia se encuentra en el segundo piso del ala izquierda del pabellon quirurgico Los consultorios externos Nº 117, 117bis y 125 se encuentran en el ala derecha del primer piso del pabellon de consultorios externos",
      "detailUrl": "/servicios/obstetricia.html",
      "historicalOrigin": "Primera Cátedra de Obstetricia de la UBA en la Maternidad Eliseo Cantón, inaugurada en 1892.",
      "pioneeringMilestones": [
        "Primera residencia de obstetricia en la Municipalidad de Buenos Aires (1960)",
        "Pioneros en 'cursos de partos sin temor' y humanización obstétrica en los años 60",
        "Investigaciones sobre la fisiología del 17-beta-estradiol por el Prof. Dr. Roberto Martín Pinto (amigo de Leloir)",
        "Centro Obstétrico moderno con quirófano propio y guardia las 24 horas"
      ],
      "historicalFigures": [
        "Prof. Enrique Zárate",
        "Prof. Roberto Martín Pinto",
        "Dr. Armando Dunaievsky",
        "Dra. Claudia Negri"
      ]
    },
    {
      "id": "odontologia",
      "file": "odontologia.html",
      "title": "Odontología",
      "category": "Médica",
      "planImg": "/de/odonto.gif",
      "phone": "4127-0200 (Int. 1320)",
      "email": "",
      "chief": "Dr. Marcelo Marcos Teiblum",
      "location": "El servicio de odontologia se encuentra en el consultorio Nº 100 del ala derecha del primer piso del pabellon de consultorios externos",
      "detailUrl": "/servicios/odontologia.html",
      "historicalOrigin": "Servicio activo registrado en el diario 'El Ramos Mejía' en 1929 a cargo del Prof. Dr. Citro Durante Avellanal.",
      "pioneeringMilestones": [
        "Atención especializada temprana en discrasias sanguíneas y estomatología",
        "Cirugía dentomaxilar y maxilofacial integrada a la guardia de urgencias",
        "Desarrollo de ortodoncia, endodoncia de alta complejidad y odontopediatría",
        "Renovación tecnológica completa de sillones e instrumental"
      ],
      "historicalFigures": [
        "Prof. Dr. Citro Durante Avellanal",
        "Dr. Miguel Vita",
        "Dr. Ricardo Leggieri",
        "Dr. Marcelo Marcos Teiblum"
      ]
    },
    {
      "id": "oftalmologia",
      "file": "oftalmologia.html",
      "title": "Oftalmología",
      "category": "Médica",
      "planImg": "/de/amb.gif",
      "phone": "4127-0200 (Int. 1318)",
      "email": "",
      "chief": "Dra. María Fernanda Merlo",
      "location": "El servicio de Oftalmología se encuentra en el pabellón ORL/OFTALMOLOGÍA, se accede por el pasillo derecho del hospital.",
      "detailUrl": "/servicios/oftalmologia.html",
      "historicalOrigin": "Iniciada en 1883 por el Dr. Eduardo Obejero, discípulo de Cleto Aguirre y Pedro Lagleyze.",
      "pioneeringMilestones": [
        "Atención oftalmológica continua desde la inauguración del Hospital San Roque en 1883",
        "Sala XIII de Clínica Oftalmológica (1929, Dr. José Cerboni)",
        "Pabellón histórico compartido con Otorrinolaringología",
        "Servicio de atención ambulatoria, guardia y microcirugía ocular"
      ],
      "historicalFigures": [
        "Dr. Cleto Aguirre",
        "Dr. Pedro Lagleyze",
        "Dr. Eduardo Obejero",
        "Dr. José Cerboni"
      ]
    },
    {
      "id": "oncologia",
      "file": "oncologia.html",
      "title": "Oncología",
      "category": "Médica",
      "planImg": "/de/onco.gif",
      "phone": "4127-0200 (Int. 1234 / 1235)",
      "email": "ramosmejiaoncologia@gmail.com",
      "chief": "Dra. Alicia Elli",
      "location": "El servicio de Oncología se encuentra en el subsuelo del pabellón de Diagnóstico por Imágenes al que se accede ORL/OFTALMOLOGÍA, se accede por el pasillo izquierdo del hospital. .com",
      "detailUrl": "/servicios/oncologia.html",
      "historicalOrigin": "Iniciada en los años 50 con la División Terapia Radiante bajo el Dr. Maisa y el Dr. Eduardo Navarrine.",
      "pioneeringMilestones": [
        "Incorporación de la primera bomba de cobalto 60 gammathrom en la década de 1960",
        "Creación del legendario Comité de Tumores de los viernes por el Prof. Lucio Sanguinetti (1967)",
        "Integración pionera de oncología médica, radioterapia y cuidados paliativos en hospital polivalente",
        "Creación de la Residencia en Oncología Clínica y sede académica de la UBA (2018)"
      ],
      "historicalFigures": [
        "Dr. Pedro Maissa",
        "Dr. Eduardo Navarrine",
        "Prof. Lucio Sanguinetti",
        "Dr. Gustavo Botto",
        "Dra. Alicia Elli"
      ]
    },
    {
      "id": "organigrama",
      "file": "organigrama.html",
      "title": "Organigrama hospitalario",
      "category": "Institucional y Administrativa",
      "planImg": "",
      "phone": "4127-0200 (Dirección)",
      "email": "",
      "chief": "",
      "location": "",
      "detailUrl": "/servicios/organigrama.html"
    },
    {
      "id": "orl",
      "file": "orl.html",
      "title": "Otorrinolaringología",
      "category": "Quirúrgica",
      "planImg": "/de/orl.gif",
      "phone": "4127-0200 (Int. 1322)",
      "email": "",
      "chief": "Dr. Amílcar Fiameni",
      "location": "El servicio de Otorrinolaringología se encuentra en el pabellón propio que el servicio posee, al cual se accede por el pasillo derecho del hospital. El consultorio externo esta ubicado en el subsuelo del mismo.",
      "detailUrl": "/servicios/orl.html",
      "historicalOrigin": "Primer servicio de ORL del país (Sala IV) fundado en 1886 por el Dr. Eduardo Obejero.",
      "pioneeringMilestones": [
        "Primer servicio de Otorrinolaringología fundado en Argentina (1886)",
        "Nacimiento de la Sociedad Argentina de ORL en 1909 por Obejero y Eliseo Segura",
        "Invención del audiómetro nacional por el Dr. Antonio Zambrini (1941)",
        "Técnica quirúrgica innovadora para otoesclerosis adoptada internacionalmente",
        "Primer implante coclear realizado en un hospital público argentino (4 de diciembre de 1997)"
      ],
      "historicalFigures": [
        "Dr. Eduardo Obejero",
        "Dr. Eliseo Segura",
        "Dr. Antonio Zambrini",
        "Dr. Atilio Viale del Carril",
        "Dr. Julio Zubizarreta"
      ]
    },
    {
      "id": "osteoporosis",
      "file": "osteoporosis.html",
      "title": "Osteoporosis",
      "category": "Médica",
      "planImg": "/de/reumato.gif",
      "phone": "4127-0200 (Int. 1286)",
      "email": "reumatologiarm@gmail.com",
      "chief": "Prof. Dr. Eduardo Mario Kerzberg",
      "location": "El Centro Nacional de Referencia en Osteoporosis se encuentra en la planta baja del pabellon de Clinica Medica. El consultorio externo Nº 128 y el consultorio de densitometria osea Nº 131 se encuentran en el ala izquierda del primer piso del pabellon de consultorios externos. .com",
      "detailUrl": "/servicios/osteoporosis.html",
      "historicalOrigin": "Desarrollado en Reumatología; designado Centro de Referencia Municipal (2000) y Nacional (2001).",
      "pioneeringMilestones": [
        "Instalación del primer densitómetro óseo de un hospital público municipal (1998)",
        "Centro de Referencia en Osteoporosis y Prevención de Fracturas de Cadera",
        "Centro de Osteoporosis y Enfermedades Osteoarticulares de la Facultad de Medicina de la UBA (2004)",
        "Investigación clínica y protocolos internacionales de densitometría ósea"
      ],
      "historicalFigures": [
        "Prof. Dr. Eduardo Mario Kerzberg",
        "Dra. Elisa Gazze"
      ]
    },
    {
      "id": "patologia",
      "file": "patologia.html",
      "title": "Anatomía Patológica",
      "category": "Diagnóstico y Tratamiento",
      "planImg": "/de/anatomia.gif",
      "phone": "4127-0200 (Int. 1347)",
      "email": "citologiaramosmejia@gmail.com",
      "chief": "Dra. Laura Jufe (Patología) / Dra. Analía Filippini (Citología)",
      "location": "Anatomia Patologica se encuentra en el pabellon propio que el servicio posee, al cual se accede ingresando al hospital por el pasillo izquierdo y dirigiendose luego al angulo que forman las calles Mexico y 24 de noviembre. Teléfonos: Anatomía patológica: 4127-0200 interno 1347 Citopatología: 4127-0200 interno 1346 Email de Citopatología",
      "detailUrl": "/servicios/patologia.html",
      "historicalOrigin": "Iniciado en 1904; cátedra ejercida por Telémaco Susini, Joaquín Llambías, Pedro Elizalde y Christofredo Jakob.",
      "pioneeringMilestones": [
        "Primer museo de patología de la Universidad fundado por Telémaco Susini",
        "Actividad de figuras eminentes como Pío del Río Hortega y Oscar C. Croxatto",
        "Inicios de la Dra. Ana Lía Taratuto (referente internacional en neuropatología)",
        "Primer Laboratorio de Citología Municipal (1960) por la Dra. Catalina Bobrow de Gagneten",
        "Pioneros en biopsia por aspiración con aguja fina (PAAF) y criostato para biopsias intraquirúrgicas (2020)"
      ],
      "historicalFigures": [
        "Dr. Telémaco Susini",
        "Dr. Pedro I. Elizalde",
        "Dr. Pío del Río Hortega",
        "Dra. Catalina Bobrow de Gagneten",
        "Dr. Adolfo Mosto"
      ]
    },
    {
      "id": "pediatria",
      "file": "pediatria.html",
      "title": "Pediatría",
      "category": "Materno-Infantil",
      "planImg": "/de/pediat.gif",
      "phone": "4127-0200 (Int. 1264)",
      "email": "",
      "chief": "Dra. Fátima Díaz (Jefa Servicio)",
      "location": "La sala de internación y el consultorio de pediatria se encuentran en el pabellon de Pediatría, que se encuentra ingresando por el pasillo que bordea la capilla por el lado izquierdo.",
      "detailUrl": "/servicios/pediatria.html",
      "historicalOrigin": "Iniciado en 1886 bajo la dirección del Dr. Facundo Larguía; cofundadores de la Sociedad Argentina de Pediatría.",
      "pioneeringMilestones": [
        "Atención pediátrica ininterrumpida desde 1886; cuna de la Sociedad Argentina de Pediatría (1911)",
        "Sala II histórica dirigida por el Dr. Juan Carlos Navarro (1929) y autor del clásico 'El Lactante'",
        "Impulso pionero de la vacuna antidiftérica por el Dr. Raúl Cibils Aguirre",
        "Líder en consultas ambulatorias pediátricas entre los hospitales generales de agudos",
        "Internación de 24 camas, shock-room pediátrico y 12 subespecialidades infantiles"
      ],
      "historicalFigures": [
        "Dr. Facundo Larguía",
        "Dr. Juan Carlos Navarro",
        "Dr. Florencio Escardó",
        "Dr. Carlos Gianantonio",
        "Dr. Hugo Pandullo"
      ]
    },
    {
      "id": "porfirias",
      "file": "porfirias.html",
      "title": "Porfirias",
      "category": "Médica",
      "planImg": "/de/geriat.gif",
      "phone": "4127-0200 (Int. 1266)",
      "email": "Consultorio.Porfirias.HRM@gmail.com",
      "chief": "Dra. Valeria Pachioli",
      "location": "El consultorio externo Nº 126 se encuentra en el primer piso del pabellón de consultorios externos. Teléfono: 5950-8346/47",
      "detailUrl": "/servicios/porfirias.html",
      "historicalOrigin": "Iniciado en 1976 en Dermatología (Dr. Pedro Magnin) y en 1978 en Clínica Médica B (Dra. Honorina Conti).",
      "pioneeringMilestones": [
        "Centro Municipal de Porfiria en articulación permanente con el CIPYP (CONICET - UBA)",
        "Grupo Multidisciplinario de Atención al Paciente con Porfiria (1994)",
        "Centro de referencia nacional para el diagnóstico precoz y crisis de porfiria aguda",
        "Disponibilidad hospitalaria de hemina y test rápido de PBG"
      ],
      "historicalFigures": [
        "Dra. Honorina Conti",
        "Prof. Dr. Pedro Magnin",
        "Dra. Lucía Tomatti",
        "Dra. Valeria Pachioli"
      ]
    },
    {
      "id": "reumatologia",
      "file": "reumatologia.html",
      "title": "Reumatología",
      "category": "Médica",
      "planImg": "/de/reumato.gif",
      "phone": "4127-0200 (Int. 1265)",
      "email": "reumatologiarm@gmail.com",
      "chief": "Prof. Dr. Eduardo Mario Kerzberg",
      "location": "El Centro Nacional de Referencia en Osteoporosis se encuentra en la planta baja del pabellon de Clinica Medica. El consultorio externo Nº 128 y el consultorio de densitometria osea Nº 131 se encuentran en el ala izquierda del primer piso del pabellon de consultorios externos. .com",
      "detailUrl": "/servicios/reumatologia.html",
      "historicalOrigin": "Creado como Grupo de Trabajo el 18 de mayo de 1990 bajo la coordinación del Dr. Eduardo Kerzberg.",
      "pioneeringMilestones": [
        "Servicio más grande de Argentina en cantidad de médicos, tecnología instalada e investigación clínica",
        "Apertura de la Carrera de Médicos Especialistas en Reumatología de la UBA (1995)",
        "Más de 105 reumatólogos formados de todas las regiones de Argentina y Latinoamérica",
        "Unidad de Investigación Clínica con protocolos internacionales de nuevos fármacos biológicos y del tejido conectivo"
      ],
      "historicalFigures": [
        "Prof. Dr. Eduardo Mario Kerzberg",
        "Dr. Efraín Huberman",
        "Dr. Víctor Hoyos Ibáñez"
      ]
    },
    {
      "id": "ryc",
      "file": "ryc.html",
      "title": "Residencias, Concurrencias y Escuelas de Técnicos para la Salud",
      "category": "Institucional y Docencia",
      "planImg": "",
      "phone": "4127-0200 (Int. 1439)",
      "email": "",
      "chief": "",
      "location": "Para todas las Residencias, Concurrencias y Escuelas Técnicas dependientes del Gobierno de la Ciudad de Buenos Aires, la información referente a las mismas deberá requerirse en la Dirección General de Docencia e Investigación, Dirección de Capacitación y Docencia calle Monasterio 480, Ciudad de Buenos Aires, teléfono: 4123-3160 al 63 Información para Escuelas de Técnicos para la Salud Click aqui",
      "detailUrl": "/servicios/ryc.html"
    },
    {
      "id": "serviciosocial",
      "file": "serviciosocial.html",
      "title": "Servicio Social",
      "category": "Apoyo y Rehabilitación",
      "planImg": "/de/vol.gif",
      "phone": "4127-0200 (Int. 1429 / 1441)",
      "email": "ramosmejia_serviciosocial@buenosaires.gov.ar",
      "chief": "Lic. María Angélica Capellino",
      "location": "El Servicio Social se encuentra en la planta baja del ala derecha del primer pabellon del hospital. .gov.ar",
      "detailUrl": "/servicios/serviciosocial.html",
      "historicalOrigin": "Iniciado el 2 de septiembre de 1931 con la designación de Mary Surano en la Maternidad Eliseo Cantón.",
      "pioneeringMilestones": [
        "Primera profesional de Servicio Social designada en 1931",
        "División técnica pionera en el abordaje integral e interdisciplinario del proceso salud-enfermedad",
        "Secciones diferenciadas en Internación (materno-infantil y adultos) y Consultorios Externos",
        "Intervención especializada en restitución de derechos y articulación sociosanitaria"
      ],
      "historicalFigures": [
        "Mary Surano (1931)",
        "María Luisa Fernández Fariña",
        "Lic. María Mercedes Morbidoni de Quintana"
      ]
    },
    {
      "id": "traumatologia",
      "file": "traumatologia.html",
      "title": "Traumatología y Ortopedia",
      "category": "Quirúrgica",
      "planImg": "/de/traumato.gif",
      "phone": "4127-0200 (Int. 1310)",
      "email": "",
      "chief": "Dr. J. Seveso",
      "location": "El Servicio de Ortopedia y Traumatologia se encuentra en la planta baja del ala izquierda del pabellon quirurgico. El consultorio externo se encuentra en el inicio del pasillo derecho del hospital.",
      "detailUrl": "/servicios/traumatologia.html",
      "historicalOrigin": "Orígenes en 1903 con Diógenes Decoud y Pedro Chutro; sala 14 unificada en 1971 por el Dr. Luis Etchegoyen.",
      "pioneeringMilestones": [
        "Tratados clásicos 'Cirugía de los huesos' (1892) y técnica de amputación de Diógenes Decoud",
        "Técnica pionera de injerto óseo por deslizamiento desarrollada por Pedro Chutro",
        "Llegada del equipo de Eduardo Alfredo Zancolli y la Escuela Quirúrgica de Graduados (1971)",
        "Equipo de Cirugía de la Mano y microcirugía ortopédica de referencia"
      ],
      "historicalFigures": [
        "Dr. Diógenes Decoud",
        "Prof. Pedro Chutro",
        "Dr. Eduardo Zancolli",
        "Dr. Antonio Ego Grossi",
        "Prof. Dr. Alberto O. Cáneva"
      ]
    },
    {
      "id": "urologia",
      "file": "urologia.html",
      "title": "Urología",
      "category": "Quirúrgica",
      "planImg": "/de/uro.gif",
      "phone": "4127-0200 (Int. 1308)",
      "email": "",
      "chief": "Dr. Juan Ignacio Ramos Suppicich",
      "location": "La sala de internación y el sector para las practicas especializadas se encuentra en la planta baja del ala derecha del pabellón cirugia. Los consultorios externos Nº 133 y 134 se encuentran en el ala izquierda del primer piso del pabellon de consultorios externos.",
      "detailUrl": "/servicios/urologia.html",
      "historicalOrigin": "Primer servicio de Urología de Argentina fundado en 1892 (Sala 10) por el Dr. Alberto Castaño.",
      "pioneeringMilestones": [
        "Primer Servicio de Urología fundado en la República Argentina (1892)",
        "Pionero sudamericano en la técnica de prostatectomía suprapúbica por el Dr. Alberto Castaño (1904)",
        "Creación de la Residencia de Urología en 1983 por el Prof. Dr. Juan Carlos Irazu (Urólogo Maestro de la SAU)",
        "Pioneros en cirugía urológica laparoscópica, percutánea, endourología y neurourología"
      ],
      "historicalFigures": [
        "Dr. Alberto Castaño",
        "Dr. Gilberto Elizalde",
        "Dr. Alejandro Astraldi",
        "Prof. Dr. Juan Carlos Irazu",
        "Dr. Sergio de Miceu"
      ]
    },
    {
      "id": "uti",
      "file": "uti.html",
      "title": "Terapia Intensiva",
      "category": "Cuidados Críticos",
      "planImg": "/de/uti.gif",
      "phone": "4127-0200 (Int. 1429 / 1441)",
      "email": "ramosmejia_serviciosocial@buenosaires.gov.ar",
      "chief": "Dr. Daniel Prieto",
      "location": "El servicio de Terapia Intensiva se encuentra en el cuarto piso del ala derecha del pabellon cirugia. .gov.ar",
      "detailUrl": "/servicios/uti.html",
      "historicalOrigin": "Surgido tras la epidemia de poliomielitis de 1957; Unidad de Terapia Intensiva polivalente formalizada en 1974.",
      "pioneeringMilestones": [
        "Respuesta histórica a la epidemia de polio con pulmones de acero e intensificación de cuidados ventilatorios",
        "Unidad de Terapia Intensiva pionera en la Municipalidad de Buenos Aires con concurso en 1979",
        "Incorporación temprana de hemodiálisis de agudos con riñones de placa (Dr. Manuel Calvo, 1968)",
        "Creación de la UTI de presión negativa con boxes individuales durante la pandemia COVID-19 (2020)"
      ],
      "historicalFigures": [
        "Dr. Aquiles Roncoroni",
        "Prof. Dr. Jorge Sánchez Zinny",
        "Dr. Roberto Padrón",
        "Dr. Daniel Prieto"
      ]
    }
  ],
  "contacts": [
    {
      "service": "Admisión y Egreso (Pacientes internados)",
      "interno": "1338 y 1352",
      "email": ""
    },
    {
      "service": "Adolescencia",
      "interno": "1287",
      "email": ""
    },
    {
      "service": "Alergia",
      "interno": "1244",
      "email": "YWxlcmdpYXJhbW9zbWVqaWFAZ21haWwuY29t"
    },
    {
      "service": "Alimentación",
      "interno": "1333 y 1335",
      "email": "YWxpbXJhbW9zQGdtYWlsLmNvbQ=="
    },
    {
      "service": "Anatomía Patológica",
      "interno": "1347",
      "email": ""
    },
    {
      "service": "Bioética Clínica",
      "interno": "4127-0200",
      "email": "Y29taXRlYmlvZXRpY2FjbGluaWNhcm1AZ21haWwuY29t"
    },
    {
      "service": "Bioética en Investigación (CEI)",
      "interno": "1288",
      "email": "Y29kZWlfcm1AeWFob28uY29tLmFy"
    },
    {
      "service": "Cardiología",
      "interno": "1246",
      "email": ""
    },
    {
      "service": "Cirugía Cardiovascular",
      "interno": "1302",
      "email": "Y2N2YXNjdWxhcjIwMTRAZ21haWwuY29t"
    },
    {
      "service": "Cirugia General A",
      "interno": "1304",
      "email": "Y2lyLmRpdi5hQGhvdG1haWwuY29t"
    },
    {
      "service": "Cirugia General B",
      "interno": "1107",
      "email": "Y2lyLmRpdi5iQGhvdG1haWwuY29t"
    },
    {
      "service": "Cirugía Plástica",
      "interno": "1312 y 1313",
      "email": ""
    },
    {
      "service": "Citopatología",
      "interno": "1346",
      "email": "Y2l0b2xvZ2lhcmFtb3NtZWppYUBnbWFpbC5jb20="
    },
    {
      "service": "Climaterio",
      "interno": "1084",
      "email": ""
    },
    {
      "service": "Clinica Medica A",
      "interno": "1251",
      "email": "Y2xpbmljYW1lZGljYXJhbW9zbWVqaWFAZ21haWwuY29t"
    },
    {
      "service": "Clinica Medica B",
      "interno": "1245 y 1255",
      "email": "Y2xpbmljYW1lZGljYXJhbW9zbWVqaWFAZ21haWwuY29t"
    },
    {
      "service": "Clinica Medica C",
      "interno": "1259",
      "email": "Y2xpbmljYW1lZGljYXJhbW9zbWVqaWFAZ21haWwuY29t"
    },
    {
      "service": "Compras",
      "interno": "1432",
      "email": ""
    },
    {
      "service": "Consultorios externos (Coordinación)",
      "interno": "1339 y 1340",
      "email": ""
    },
    {
      "service": "Densitometía Ósea",
      "interno": "1286",
      "email": ""
    },
    {
      "service": "Dermatología",
      "interno": "1012",
      "email": ""
    },
    {
      "service": "Dermatología Pediátrica",
      "interno": "1264",
      "email": ""
    },
    {
      "service": "Dirección (Secretaría)",
      "interno": "4127-0200",
      "email": "cmFtb3NtZWppYV9kaXJlY2Npb25AYnVlbm9zYWlyZXMuZ29iLmFy"
    },
    {
      "service": "Subdirección (Secretaría)",
      "interno": "4127-0200",
      "email": "cmFtb3NtZWppYV9kaXJlY2Npb25AYnVlbm9zYWlyZXMuZ29iLmFy"
    },
    {
      "service": "Docencia (Comité de..)",
      "interno": "1439",
      "email": "Y29kZWlfcm1AeWFob28uY29tLmFy"
    },
    {
      "service": "Endocrinología",
      "interno": "1266",
      "email": "ZW5kb2NyaW5vbG9naWFyYW1vc21lamlhQGdtYWlsLmNvbQ=="
    },
    {
      "service": "Endocrinología (Laboratorio)",
      "interno": "1458",
      "email": ""
    },
    {
      "service": "Enfermería",
      "interno": "1292",
      "email": ""
    },
    {
      "service": "Epilepsia",
      "interno": "1096 y 1233",
      "email": "cmFtb3NtZWppYWVwaWxlcHNpYUBnbWFpbC5jb20="
    },
    {
      "service": "Estadística",
      "interno": "1337",
      "email": ""
    },
    {
      "service": "Facturación",
      "interno": "1433",
      "email": ""
    },
    {
      "service": "Fonoaudiología",
      "interno": "1324",
      "email": ""
    },
    {
      "service": "Farmacia",
      "interno": "1349 y 1350",
      "email": ""
    },
    {
      "service": "Gastroenterología",
      "interno": "1269 y 1299",
      "email": ""
    },
    {
      "service": "Geriatría",
      "interno": "1270",
      "email": ""
    },
    {
      "service": "Ginecología",
      "interno": "1226 y 1314",
      "email": ""
    },
    {
      "service": "Guardia de Emergencias",
      "interno": "1404 y 1415",
      "email": ""
    },
    {
      "service": "Hematología",
      "interno": "1461",
      "email": ""
    },
    {
      "service": "Hemoterapia (Banco de sangre)",
      "interno": "1355",
      "email": "aGVtby5ybUBnbWFpbC5jb20="
    },
    {
      "service": "Hepatología",
      "interno": "1355",
      "email": "aGVwYXRvcmFtb3NAZ21haWwuY29t"
    },
    {
      "service": "Hipertensión Arterial",
      "interno": "1227",
      "email": "aHRhcmFtb3NtZWppYUBnbWFpbC5jb20="
    },
    {
      "service": "Infectología",
      "interno": "1090",
      "email": ""
    },
    {
      "service": "Informática",
      "interno": "1341",
      "email": ""
    },
    {
      "service": "Informes",
      "interno": "1336",
      "email": ""
    },
    {
      "service": "Inmunocomprometidos (HIV)",
      "interno": "1419",
      "email": "c2VjcmV0YXJpYUBoaXZyYW1vcy5vcmcuYXI="
    },
    {
      "service": "Instrumentación Quirúrgica",
      "interno": "1307",
      "email": ""
    },
    {
      "service": "Investigación (CEI)",
      "interno": "1288",
      "email": "Y29kZWlfcm1AeWFob28uY29tLmFy"
    },
    {
      "service": "Kinesiología",
      "interno": "1068 y 1358",
      "email": ""
    },
    {
      "service": "Laboratorio Central",
      "interno": "1361",
      "email": ""
    },
    {
      "service": "Libreta sanitaria",
      "interno": "4127-0200",
      "email": "cmFtb3NtZWppYV9wcmV2ZW5jaW9ueXByb21vY2lvbkBidWVub3NhaXJlcy5nb2IuYXI="
    },
    {
      "service": "Mantenimiento",
      "interno": "1219",
      "email": ""
    },
    {
      "service": "Medicina del Deporte",
      "interno": "1474",
      "email": ""
    },
    {
      "service": "Medicina Nuclear",
      "interno": "1366 y 1367",
      "email": ""
    },
    {
      "service": "Nefrología",
      "interno": "1229 y 1230",
      "email": ""
    },
    {
      "service": "Neonatología",
      "interno": "1384",
      "email": ""
    },
    {
      "service": "Neumotisiología",
      "interno": "1277",
      "email": "bmV1bW90aXNpb2xvZ2lhLnJhbW9zbWVqaWFAZ21haWwuY29t"
    },
    {
      "service": "Neurocirugía",
      "interno": "1123",
      "email": "bmV1cm9jaXJ1Z2lhLnJhbW9zQHlhaG9vLmNvbS5hcg=="
    },
    {
      "service": "Neurología",
      "interno": "1295",
      "email": ""
    },
    {
      "service": "Nutrición y Diabetes",
      "interno": "1283",
      "email": ""
    },
    {
      "service": "Obstetricia",
      "interno": "1388",
      "email": ""
    },
    {
      "service": "OFICIOS JUDICIALES",
      "interno": "4127-0200",
      "email": "cmFtb3NtZWppYV9vZmljaW9zanVkaWNpYWxlc0BAYnVlbm9zYWlyZXMuZ29iLmFy"
    },
    {
      "service": "Oftalmología",
      "interno": "1135",
      "email": ""
    },
    {
      "service": "Oncología",
      "interno": "1234 y 1235",
      "email": ""
    },
    {
      "service": "Otorrinolaringología",
      "interno": "1322",
      "email": ""
    },
    {
      "service": "PAMI",
      "interno": "1440",
      "email": ""
    },
    {
      "service": "Parasitología",
      "interno": "1364",
      "email": ""
    },
    {
      "service": "Pediatría",
      "interno": "1381",
      "email": ""
    },
    {
      "service": "Porfirias",
      "interno": "5950-8346/47",
      "email": "Q29uc3VsdG9yaW8uUG9yZmlyaWFzLkhSTUBnbWFpbC5jb20="
    },
    {
      "service": "Radiología",
      "interno": "1369",
      "email": ""
    },
    {
      "service": "Radioterapia",
      "interno": "1377",
      "email": ""
    },
    {
      "service": "Recursos humanos",
      "interno": "1212 y 1213",
      "email": ""
    },
    {
      "service": "Reumatología",
      "interno": "1099",
      "email": "cmV1bWF0b2xvZ2lhcm1AZ21haWwuY29t"
    },
    {
      "service": "Salud Mental (Psicopatología)",
      "interno": "1285 y 1289",
      "email": "ZXF1aXBvYWR1bHRvc3JtQGdtYWlsLmNvbQ=="
    },
    {
      "service": "Tomografía Computada",
      "interno": "1372",
      "email": ""
    },
    {
      "service": "Traumatología",
      "interno": "1326",
      "email": ""
    },
    {
      "service": "UBA - Unidad Docente Hospitalaria",
      "interno": "1262",
      "email": ""
    },
    {
      "service": "Urología",
      "interno": "1330",
      "email": ""
    },
    {
      "service": "Vacunatorio",
      "interno": "1241 y 1242",
      "email": ""
    }
  ],
  "gallery": [
    {
      "src": "/fot/panoram.jpg?v=2026.2",
      "title": "Vista Panorámica del Hospital",
      "desc": "Hospital General de Agudos Dr. José María Ramos Mejía, Balvanera, CABA."
    },
    {
      "src": "/fot/entra.jpg?v=2026.2",
      "title": "Acceso Principal",
      "desc": "Entrada institucional sobre calle General Urquiza 609."
    },
    {
      "src": "/fot/guardia.jpg?v=2026.2",
      "title": "Pabellón de Guardia 24 Horas",
      "desc": "Atención médica permanente para urgencias y emergencias de adultos y pediatría."
    },
    {
      "src": "/fot/hall.jpg?v=2026.2",
      "title": "Hall Central y Pasillos",
      "desc": "Espacios de circulación que conectan los diversos pabellones y consultorios."
    },
    {
      "src": "/fot/clinica.jpg?v=2026.2",
      "title": "Pabellón de Clínica Médica",
      "desc": "Salas de internación, ateneos y consultorios de medicina interna."
    },
    {
      "src": "/fot/cirugia.jpg?v=2026.2",
      "title": "Pabellón Quirúrgico",
      "desc": "Centro quirúrgico con quirófanos inteligentes y unidad de recuperación."
    },
    {
      "src": "/fot/cardio.jpg?v=2026.2",
      "title": "Pabellón de Cardiología",
      "desc": "Unidad coronaria, hemodinamia e internación cardiológica."
    },
    {
      "src": "/fot/pediatr.jpg?v=2026.2",
      "title": "Pabellón Materno-Infantil",
      "desc": "Consultorios de Pediatría, Neonatología y Maternidad."
    },
    {
      "src": "/fot/capilla.jpg?v=2026.2",
      "title": "Capilla Histórica",
      "desc": "Patrimonio arquitectónico del complejo hospitalario desde el siglo XIX."
    },
    {
      "src": "/fot/jardin.jpg?v=2026.2",
      "title": "Patios y Jardines Terapéuticos",
      "desc": "Áreas verdes que brindan luz natural y ventilación a los pabellones."
    },
    {
      "src": "/fot/histo1.jpg?v=2026.2",
      "title": "Orígenes: Lazareto San Roque (1868)",
      "desc": "Más de 150 años al servicio de la salud pública argentina."
    },
    {
      "src": "/fot/finoch.jpg?v=2026.2",
      "title": "Aula Magna y Sector Quirúrgico",
      "desc": "Cuna de maestros de la cirugía argentina como Enrique y Ricardo Finochietto."
    }
  ],
  "patientGuides": [
    {
      "id": "turnos",
      "title": "Solicitud de Turnos Médicos",
      "icon": "🗓️",
      "summary": "Central telefónica de turnos del Sistema de Salud GCABA y servicios especiales.",
      "details": "Para atención en consultorios externos:<br>• <strong>CABA:</strong> Llame a la línea gratuita <strong>147</strong> (lunes a viernes de 7:00 a 21:00 hs).<br>• <strong>Provincia de Buenos Aires:</strong> Comuníquese al <strong>0800-999-2727</strong>.<br>• Algunas especialidades de alta complejidad gestionan sus turnos de forma directa por orden de derivación hospitalaria o ventanilla del servicio."
    },
    {
      "id": "guardia",
      "title": "Guardia y Urgencias 24 Horas",
      "icon": "🚑",
      "summary": "Atención continua todos los días del año con triage médico de prioridades.",
      "details": "El servicio de Guardia y Urgencias funciona las 24 horas sobre calle Gral. Urquiza 609.<br>• Cuenta con Guardia General de Adultos, Pediatría, Maternidad y Salud Mental.<br>• En caso de emergencias médicas en la vía pública o domicilio, comunicarse inmediatamente con el <strong>SAME (Línea 107)</strong>."
    },
    {
      "id": "registro-civil",
      "title": "Registro Civil e Inscripción de Recién Nacidos",
      "icon": "👶",
      "summary": "Inscripción obligatoria dentro de los 40 días hábiles en el hospital.",
      "details": "Ubicación: 3° piso, ala derecha del Pabellón Quirúrgico. Horario: 8:30 a 13:30 hs.<br>• <strong>Padres casados:</strong> Concurre uno de los padres con Libreta o Acta de Matrimonio y DNI de ambos (original y fotocopia).<br>• <strong>Padres solteros:</strong> Concurren ambos con DNI original y fotocopias.<br>• <strong>Madre sola:</strong> Concurre con DNI original y fotocopia.<br>• <strong>Partidas de años anteriores:</strong> Se solicitan por la web oficial de GCABA."
    },
    {
      "id": "libreta-sanitaria",
      "title": "Libreta Sanitaria y Examen Prematrimonial",
      "icon": "📋",
      "summary": "Servicio de Promoción y Protección de la Salud para trabajadores y contrayentes.",
      "details": "Servicio de Promoción y Protección de la Salud (Tel: 4127-0200 / Email: <a href=\"mailto:ramosmejia_prevencionypromocion@buenosaires.gob.ar\">ramosmejia_prevencionypromocion@buenosaires.gob.ar</a>).<br>• <strong>Libreta Sanitaria:</strong> Empleador con domicilio en el área programática. DNI original, certificado de aptitud clínica membretado, hemograma, VDRL, Rx de Tórax, vacunas obligatorias al día.<br>• <strong>Exámenes prematrimoniales:</strong> Concurrir según protocolo del Registro Civil con 8hs de ayuno a las 8:00 hs."
    },
    {
      "id": "densitometria",
      "title": "Densitometría Ósea (Osteoporosis)",
      "icon": "🦴",
      "summary": "Estudios preventivos de masa ósea para mujeres mayores de 60 años.",
      "details": "Se realiza con derivación médica de un hospital público del GCABA.<br>• <strong>Turnos telefónicos:</strong> Martes y jueves de 9:00 a 12:00 hs al teléfono <strong>4127-0200 interno 1286</strong>.<br>• Consultorio N° 131, primer piso.<br>• Por calibración técnica del equipamiento, peso máximo del paciente: 80 kg."
    },
    {
      "id": "donacion-sangre",
      "title": "Hemoterapia y Donación de Sangre",
      "icon": "🩸",
      "summary": "Pabellón de Hemoterapia para donantes voluntarios y pacientes programados.",
      "details": "Servicio de Hemoterapia (Interno 1270 / 4127-0200).<br>• Concurrir con DNI, edad entre 16 y 65 años, peso superior a 50 kg.<br>• No acudir en ayuno total: se recomienda ingerir abundante líquido (agua, té, mate o café sin leche) y frutas, evitando grasas y lácteos."
    },
    {
      "id": "area-programatica",
      "title": "Área Programática y CeSACs",
      "icon": "🏥",
      "summary": "Red comunitaria de atención primaria en Comuna 3 (Balvanera y San Cristóbal).",
      "details": "El Área Programática integra al hospital con la comunidad escolar y barrial:<br>• <strong>CeSAC N° 11:</strong> Agüero 940 (Balvanera).<br>• <strong>CeSAC N° 45:</strong> Cochabamba 2622 (San Cristóbal).<br>• Pabellón \"J\" del hospital (Tel: 4957-2554 / Jefatura: 4932-5279 / Email: <a href=\"mailto:ramosmejia_aprogramatica@buenosaires.gob.ar\">ramosmejia_aprogramatica@buenosaires.gob.ar</a>)."
    }
  ],
  "news": [
    {
      "id": "noticia-2",
      "date": "28 de Agosto de 2026",
      "tag": "Infraestructura Asistencial",
      "title": "Incorporación de Nuevo Equipamiento Digital en Diagnóstico por Imágenes y Tomografía",
      "summary": "El hospital puso en funcionamiento nueva aparatología de alta resolución para ecografías complejas y tomografías computadas, articuladas de forma directa con la red de turnos 147 y la Historia Clínica Electrónica.",
      "link": "#especialidades",
      "isInternal": true
    },
    {
      "id": "noticia-3",
      "date": "14 de Julio de 2026",
      "tag": "Atención Primaria y Comunidad",
      "title": "Campaña Integral de Salud Escolar y Vacunación en Comuna 3 con los CeSAC 11 y 45",
      "summary": "El Área Programática del Hospital Ramos Mejía intensificó las postas sanitarias barriales y controles médicos en escuelas primarias de Balvanera y San Cristóbal para completar esquemas de vacunación.",
      "link": "#area-programatica-sec",
      "isInternal": true
    },
    {
      "id": "noticia-4",
      "date": "20 de Mayo de 2026",
      "tag": "Formación Médica UBA",
      "title": "Apertura del Ciclo Académico de Residencias y Concurrencias Médicas 2026",
      "summary": "Más de 80 nuevos residentes y concurrentes se incorporaron a las diversas divisiones quirúrgicas, clínicas y pediátricas en nuestro rol como Hospital Escuela afiliado a la Facultad de Medicina de la UBA.",
      "link": "#docencia",
      "isInternal": true
    }
  ],
  "history": {
    "book": {
      "title": "Del Lazareto San Roque al Hospital Ramos Mejía",
      "subtitle": "Historia del hospital y sus servicios (1868–2026)",
      "editors": "Dr. Nicolás Alonso • Dr. Martín Sívori",
      "edition": "1.ª edición digital (Julio 2026)",
      "pages": 185,
      "chapters": 59,
      "pdfUrl": "/servicios/HRM_borrador_2.pdf",
      "coverImg": "/hero.jpg",
      "summary": "Monumento historiográfico que recorre más de 150 años de historia ininterrumpida. Desde su creación en 1868 como Lazareto San Roque durante las trágicas epidemias de cólera y fiebre amarilla, su refundación como Hospital San Roque bajo el trazo del arquitecto Juan Antonio Buschiazzo, hasta su rol insignia como Hospital Escuela de la Universidad de Buenos Aires y faro de la salud pública argentina."
    },
    "nobelLaureates": [
      {
        "name": "Dr. Bernardo A. Houssay",
        "years": "1887 – 1971",
        "nobel": "Premio Nobel de Fisiología y Medicina (1947)",
        "roleHospital": "Practicante del Hospital Ramos Mejía (1904 – 1913)",
        "desc": "Primer científico argentino y latinoamericano galardonado con el Premio Nobel. Graduado de médico en la UBA, desarrolló sus primeros años formativos y de atención clínica como practicante en el Hospital Ramos Mejía. Sus investigaciones sobre la hipófisis y el metabolismo de la glucosa cambiaron la endocrinología mundial. En un testimonio vivo de continuidad histórica, una nieta suya se desempeña actualmente como médica de planta en el Servicio de Nutrición del hospital.",
        "badge": "Nobel de Medicina 1947",
        "icon": "🎖️"
      },
      {
        "name": "Dr. Luis Federico Leloir",
        "years": "1906 – 1987",
        "nobel": "Premio Nobel de Química (1970)",
        "roleHospital": "Practicante en Sala XV (1929 – 1933) y Presidente de la Revista de Practicantes",
        "desc": "Reconocido con el Premio Nobel de Química por el descubrimiento de los nucleótidos de azúcar y su rol en la biosíntesis de glúcidos. Se formó en los pasillos del Ramos Mejía trabajando en la Sala XV junto al Dr. Carlos Bonorino Udaondo, fundó la Sociedad de Investigación Ramos Mejía y presidió la Revista de la Asociación de Médicos Practicantes antes de ingresar al Instituto de Fisiología junto a Houssay.",
        "badge": "Nobel de Química 1970",
        "icon": "🧪"
      }
    ],
    "cultureAndTango": [
      {
        "title": "Carlos Gardel en el Ramos Mejía",
        "year": "Diciembre de 1915",
        "icon": "🎩",
        "desc": "Tras recibir un balazo en el tórax en un altercado a la salida del Palais de Glace, el mítico cantor de tangos fue atendido e internado de urgencia en el Hospital Ramos Mejía. El equipo médico evaluó que era más peligroso extraer el proyectil que dejarlo: Gardel vivió y cantó toda su gloriosa carrera con la bala alojada en su pulmón izquierdo."
      },
      {
        "title": "El Dr. Alberto Castillo: Ginecólogo y Rey del Tango",
        "year": "Décadas 1930 – 1940",
        "icon": "🎙️",
        "desc": "El entrañable 'cantor de los cien barrios porteños' era en realidad el Dr. Alberto Salvador De Luca, médico ginecólogo del Ramos Mejía y Jefe del Museo de la Maternidad Eliseo Cantón. Durante años ejerció una doble vida: por las tardes atendía con riguroso guardapolvo blanco y por las noches llenaba teatros con su orquesta y su estilo tanguero inconfundible."
      },
      {
        "title": "Enrique Santos Discépolo y Balvanera",
        "year": "1901 – 1951",
        "icon": "🎵",
        "desc": "Nacido a tres cuadras del hospital (calle Paso 111), 'Discepolín' fue un asiduo visitante de las guardias del Ramos Mejía y amigo íntimo de sus médicos. La tradición oral del hospital atestigua que el dolor de los desposeídos y el ambiente hospitalario nutrieron la honda mirada humana de tangos universales como 'Cambalache' y 'Yira, yira'."
      },
      {
        "title": "Los Bailes del Internado y Tangos Consagrados",
        "year": "1914 – 1924",
        "icon": "🎻",
        "desc": "Tradición única impulsada por los practicantes e internos médicos en el Palais de Glace y el Pabellón de las Rosas. Grandes maestros del tango compusieron piezas dedicadas expresamente a la institución: 'El Apronte' (Roberto Firpo, 1931), 'Hospital San Roque' (Vicente Greco 'Garrote', 1917) y 'El Internado' (Francisco Canaro, 1915)."
      },
      {
        "title": "Letras y Pensamiento: Sicardi, Ingenieros y Selva Almada",
        "year": "Siglos XIX – XXI",
        "icon": "📚",
        "desc": "El hospital fue cuna y hogar de plumas ilustres: el Dr. Francisco Sicardi retrató la bohemia y los conventillos en 'Libro extraño'; el Dr. José Ingenieros escribió obras clave del pensamiento nacional como 'El hombre mediocre'; y la premiada autora contemporánea Selva Almada trabajó años en la farmacia y depósito del Ramos mientras escribía sus primeros libros."
      },
      {
        "title": "El Patrimonio Pictórico: Los Óleos de Roberto Fantuzzi",
        "year": "1921 – 1935",
        "icon": "🎨",
        "desc": "El pintor italiano Roberto Fantuzzi inmortalizó escenas maestras del Ramos Mejía: 'Una lección de clínica médica' (Prof. Bullrich), 'Operación cesárea' (1921, homenaje a Enrique Zárate y Cecilia Grierson), 'Cirugía abdominal' (1932, homenaje a Osvaldo Bottaro) y 'Una intervención quirúrgica' (Robertson Lavalle), además del busto de Ramos Mejía realizado por el escultor José Fioravanti."
      }
    ],
    "memory": {
      "title": "Comisión de la Memoria y los Derechos Humanos",
      "established": "Año 2000",
      "recognition": "Reconocida por la Legislatura de la Ciudad Autónoma de Buenos Aires",
      "desc": "En homenaje y reivindicación activa de los ocho trabajadores y estudiantes de la salud del Hospital Ramos Mejía detenidos-desaparecidos durante la última dictadura cívico-militar (1976–1983), cuyas placas perpetúan su memoria en el hall central de Urquiza 609:",
      "victims": [
        {
          "name": "Eleonora Cristina Álvarez",
          "role": "Empleada Administrativa"
        },
        {
          "name": "Dr. Jorge Donato Calvo",
          "role": "Médico Residente de Cirugía (2.° año)"
        },
        {
          "name": "Dra. Teresa 'Peti' Lajmanovich",
          "role": "Médica Concurrente en Hematología"
        },
        {
          "name": "Pablo Limber",
          "role": "Delegado Gremial y Técnico de Parasitología / Laboratorio"
        },
        {
          "name": "Alicia Noemí Zimman",
          "role": "Alumna de la Unidad Docente Hospitalaria (UDH)"
        },
        {
          "name": "Dra. Norma Leiva",
          "role": "Jefa de Residentes de Anatomía Patológica"
        },
        {
          "name": "María José Marzoca",
          "role": "Técnica del Laboratorio Central"
        },
        {
          "name": "Dr. Eduardo Miguel O'Neill",
          "role": "Médico de Neurología y Docente UBA"
        }
      ],
      "survivorNote": "El hospital recuerda con profundo orgullo el testimonio de la Dra. Hilda Parisier, endocrinóloga de Clínica Médica, secuestrada en 1976, sobreviviente del centro clandestino 'El Vesubio' y tenaz investigadora de la salud pública."
    },
    "directorsTimeline": [
      {
        "period": "1869 – 1883",
        "era": "Lazareto San Roque",
        "list": [
          "Dr. Pedro A. Mattos",
          "Dr. Salvador Doncel",
          "Dr. Julián Fernández (hijo)",
          "Dr. Julián Aguilar",
          "Dr. Telémaco Susini",
          "Dr. Enrique Revilla"
        ]
      },
      {
        "period": "1883 – 1914",
        "era": "Hospital San Roque",
        "list": [
          "Dr. José María Ramos Mejía (1883-1887)",
          "Dr. Eduardo Wilde (1887-1889)",
          "Dr. Juan B. Justo (1889-1890)",
          "Dr. Nicolás Repetto (1890-1892)",
          "Dr. Rafael A. Bullrich (1892-1895)",
          "Dr. Julio Méndez (1895-1898)",
          "Dr. Francisco Sicardi (1898-1901)",
          "Dr. Ricardo Nötling (1901-1904)"
        ]
      },
      {
        "period": "1914 – 1943",
        "era": "Hospital Ramos Mejía (Época de Oro)",
        "list": [
          "Dr. Pedro Chutro (1916-1918)",
          "Dr. Gregorio Aráoz Alfaro (1916-1918)",
          "Dr. Arturo Oñativia (1918-1922)",
          "Dr. Carlos Bonorino Udaondo (1922-1928)",
          "Dr. Delfor del Valle (h) (1929)",
          "Dr. Carlos Robertson Lavalle (1929-1943)"
        ]
      },
      {
        "period": "1990 – 2016",
        "era": "Hospital Ramos Mejía (Consolidación)",
        "list": [
          "Dr. Abel Luis Agüero (1990)",
          "Dr. Marcelo L. Castillo (1992)",
          "Dr. Carlos Igarzábal (1994)",
          "Dr. Abel Citadino (1997)",
          "Dr. Olmedo (2000)",
          "Dr. Alejandro Chikiar (2002)",
          "Dr. Ricardo Rezzónico (2004)",
          "Dr. Eduardo Seoane (2009)",
          "Dr. Carlos Mercau (2012)"
        ]
      },
      {
        "period": "2017 – Presente",
        "era": "Dirección Actual (2026)",
        "list": [
          "Dr. Hugo Aníbal Pandullo (Director Médico)",
          "Dr. Juan Pablo Rossini (Subdirector hasta junio 2026)"
        ]
      }
    ]
  }
};
