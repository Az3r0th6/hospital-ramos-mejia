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
    "subdirectora": "Fatima Diaz",
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
        "name": "Fatima Diaz",
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
    "yearsOfService": `${TRAJECTORY_YEARS} años de salud pública (${FOUNDATION_YEAR} - ${CURRENT_YEAR})`,
    "currentYear": CURRENT_YEAR
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
      "chief": "",
      "location": "El consultorio externo Nº 112 se encuentra en el 1er piso del ala derecha del pabellón consultorios externos. .com",
      "detailUrl": "/servicios/alergia.html"
    },
    {
      "id": "alimentacion",
      "file": "alimentacion.html",
      "title": "Alimentación",
      "category": "Apoyo y Rehabilitación",
      "planImg": "/de/aliment.gif",
      "phone": "4127-0200 (Int. 1333 / 1335)",
      "email": "alimramos@gmail.com",
      "chief": "",
      "location": "El Servicio de Alimentación se encuentra en la planta baja del ala derecha del pabellón cirugía. El consultorio externo Nº 151 se encuentra en el ala izquierda del primer piso del pabellón de consultorios externos. .com",
      "detailUrl": "/servicios/alimentacion.html"
    },
    {
      "id": "anestesiologia",
      "file": "anestesiologia.html",
      "title": "Anestesiología",
      "category": "Quirúrgica",
      "planImg": "/de/anest.gif",
      "phone": "4127-0200 (Int. 1436)",
      "email": "",
      "chief": "",
      "location": "4to piso Pabellón Cirugía Quirófano Central, Sala de Recuperación Postanestésica y Despacho Jefatura Anestesiología 3er piso Pabellón Cirugía Consultorio de Medicina del Dolor y de Evaluación Preanestésica",
      "detailUrl": "/servicios/anestesiologia.html"
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
      "chief": "",
      "location": "El servicio de Area Programatica se encuentra en el pabellón \"J\", que se encuentra ubicado ingresando al hospital por el pasillo izquierdo hasta el fondo y luego doblando hacia la izquierda. Teléfonos: Office de Enfermería: 4127-0437 Recepción: 4957-2554 Jefatura: 4932-5279",
      "detailUrl": "/servicios/areaprogramatica.html"
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
      "chief": "",
      "location": "Cardiologia se encuentra en el pabellón propio que el servicio posee, al cual se accede ingresando al hospital por el pasillo derecho y dirigiéndose luego al ángulo que forman las calles Urquiza y Venezuela.",
      "detailUrl": "/servicios/cardiologia.html"
    },
    {
      "id": "cardiovascular",
      "file": "cardiovascular.html",
      "title": "Cirugía Cardiovascular",
      "category": "Quirúrgica",
      "planImg": "/de/cardiov.gif",
      "phone": "4127-0200 (Int. 1302)",
      "email": "ccvascular2014@gmail.com",
      "chief": "",
      "location": "El servicio y consultorio externo de Cirugia Cardiovascular se encuentra en el 1º piso del ala derecha del pabellon quirurgico. .com",
      "detailUrl": "/servicios/cardiovascular.html"
    },
    {
      "id": "cirugia",
      "file": "cirugia.html",
      "title": "Cirugía General",
      "category": "Quirúrgica",
      "planImg": "/de/cirugiaa.gif",
      "phone": "4127-0200 (Int. 1304 / 1107)",
      "email": "cir.div.a@hotmail.com",
      "chief": "",
      "location": "La División A de Cirugia General se encuentra en el primer piso del pabellón quirúrgico. El consultorio externo Nº 160 se encuentra en el 1er piso, del ala izquierda del pabellón de consultorios externos. Secretario: Leandro Gómez",
      "detailUrl": "/servicios/cirugia.html"
    },
    {
      "id": "clinica",
      "file": "clinica.html",
      "title": "Clínica Médica, División A",
      "category": "Médica",
      "planImg": "/de/clinicaa.gif",
      "phone": "4127-0200 (Int. 1251 / 1245)",
      "email": "clinicamedicaramosmejia@gmail.com",
      "chief": "",
      "location": "La División A de Clínica Médica se encuentra en el 2º piso del pabellón propio que el servicio posee al cual se ingresa por el pasillo izquierdo del hospital. El consultorio externo Nº 143 a 146 se encuentra en el ala izquierda del primer piso del pabellon de consultorios externos. .com",
      "detailUrl": "/servicios/clinica.html"
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
      "chief": "",
      "location": "El servicio de Cirugía Plástica se encuentra en el 1er y 3er piso, ala izquierda del pabellón quirúrgico.",
      "detailUrl": "/servicios/cplastica.html"
    },
    {
      "id": "dermatologia",
      "file": "dermatologia.html",
      "title": "Dermatología",
      "category": "Médica",
      "planImg": "/de/dermato.gif",
      "phone": "4127-0200 (Int. 1012 / 1264)",
      "email": "",
      "chief": "",
      "location": "La sala de internación y consultorios externos de Dermatología se encuentran en el segundo piso del primer pabellón ingresando por el pasillo izquierdo del hospital Teléfono: 4127022 interno 1012, Dermatología infantil: interno 1264",
      "detailUrl": "/servicios/dermatologia.html"
    },
    {
      "id": "endocrinologia",
      "file": "endocrinologia.html",
      "title": "Endocrinología",
      "category": "Médica",
      "planImg": "/de/endoc.gif",
      "phone": "4127-0200 (Int. 1266 / 1458)",
      "email": "endocrinologiaramosmejia@gmail.com",
      "chief": "",
      "location": "Endocrinología se encuentra en la mitad del pasillo izquierdo del hospital Teléfono del servicio: 41270200 interno 1266 Teléfono del laboratorio de endocrinología: 41270200 interno 1458",
      "detailUrl": "/servicios/endocrinologia.html"
    },
    {
      "id": "enfermeria",
      "file": "enfermeria.html",
      "title": "Enfermería",
      "category": "Cuidados y Apoyo",
      "planImg": "/de/arancel.gif",
      "phone": "4127-0200 (Int. 1292)",
      "email": "",
      "chief": "",
      "location": "El Departamento de Enfermería se encuentra en el inicio del pasillo derecho del hospital. Teléfono del servicio: 41270200 interno 1292",
      "detailUrl": "/servicios/enfermeria.html"
    },
    {
      "id": "epilepsia",
      "file": "epilepsia.html",
      "title": "Epilepsia",
      "category": "Médica y Neurociencias",
      "planImg": "/de/neuro.gif",
      "phone": "4127-0200 (Int. 1096 / 1233)",
      "email": "ramosmejiaepilepsia@gmail.com",
      "chief": "",
      "location": "Unidad de Video - EEG: 1er piso. Sala de Neurología. Consultorios Externos: 1er piso. Consultorios 150, 151 y 156 .com",
      "detailUrl": "/servicios/epilepsia.html"
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
      "chief": "",
      "location": "Farmacia se encuentra ingresando al hospital y girando hacia la derecha desde el hall central.",
      "detailUrl": "/servicios/farmacia.html"
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
      "chief": "",
      "location": "El Servicio de Gastroenterología se encuentra en el tercer piso del pabellón quirúrgico. El consultorio externo se encuentra en el 1er piso, del ala izquierda del pabellón de consultorios externos.",
      "detailUrl": "/servicios/gastroenterologia.html"
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
      "chief": "",
      "location": "El Servicio de Geriatría se encuentra en el primer piso del pabellón de Clínica Medica. El Consultorio externo se encuentra en la puerta Nº 119 del primer piso del pabellon de consultorios externos. .com",
      "detailUrl": "/servicios/geriatria.html"
    },
    {
      "id": "ginecologia",
      "file": "ginecologia.html",
      "title": "Ginecología",
      "category": "Materno-Infantil",
      "planImg": "/de/gineco.gif",
      "phone": "4127-0200 (Int. 1084)",
      "email": "",
      "chief": "",
      "location": "El Servicio de Ginecología se encuentra en el 2º piso, ala derecha del Pabellón Quirúrgico El Consultorio de Patología Mamaria y el Consultorio de Patología del Tracto Genital Inferior (Colposcopía), se encuentran en el 2º piso Pabellón Quirúrgico El resto de los consultorios externos del Nº 116, 119, 120, 122, 123, 124 y 126, se encuentran en el 1º piso, ala derecha del Pabellón de Consultorios externos",
      "detailUrl": "/servicios/ginecologia.html"
    },
    {
      "id": "hematologia",
      "file": "hematologia.html",
      "title": "Hematología",
      "category": "Médica",
      "planImg": "/de/hemato.gif",
      "phone": "4127-0200 (Int. 1461)",
      "email": "",
      "chief": "",
      "location": "Hematología se encuentra en el pabellón propio que el servicio posee, al cual se accede por el pasillo izquierdo del hospital.",
      "detailUrl": "/servicios/hematologia.html"
    },
    {
      "id": "hemoterapia",
      "file": "hemoterapia.html",
      "title": "Hemoterapia",
      "category": "Diagnóstico y Tratamiento",
      "planImg": "/de/endoc.gif",
      "phone": "4127-0200 (Int. 1270)",
      "email": "hemo.rm@gmail.com",
      "chief": "",
      "location": "El servicio de Hemoterapia se encuentra en el pabellon \"E\", al cual se accede por el pasillo izquierdo del hospital.",
      "detailUrl": "/servicios/hemoterapia.html"
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
      "chief": "",
      "location": "El Servicio de Hipertension Arterial se encuentra en el primer piso del pabellón Clínica Medica. El consultorio externo 125 de Hipertensión Arterial se encuentra en el primer piso ala izquierda del pabellón Consultorios Externos. .com",
      "detailUrl": "/servicios/hipertensionarterial.html"
    },
    {
      "id": "imagenes",
      "file": "imagenes.html",
      "title": "Diagnóstico por Imágenes",
      "category": "Diagnóstico por Imágenes",
      "planImg": "/de/rayos.gif",
      "phone": "4127-0200 (Int. 1372)",
      "email": "turnosrxramosmejia@gmail.com",
      "chief": "",
      "location": "Diagnostico por Imagenes se encuentra en el pabellon propio que el servicio posee, al cual se accede ingresando al hospital por el hall central y doblando a la izquierda. Teléfonos: Ecografia, Doppler y Tomografía 4127-0200 interno 1372. Mamografía: 147",
      "detailUrl": "/servicios/imagenes.html"
    },
    {
      "id": "inmunocomprometidos",
      "file": "inmunocomprometidos.html",
      "title": "Inmunocomprometidos",
      "category": "Cuidados Críticos",
      "planImg": "/de/clinicaa.gif",
      "phone": "4127-0200 (Int. 1251)",
      "email": "secretaria@hivramos.org.ar",
      "chief": "",
      "location": "El Servicio de Inmunocomprometidos se encuentra en 2º piso del pabellon de Clinica Medica ingresando por el pasillo izquierdo del hospital. El consultorio externo Nº 154 y 155 se encuentra en 1º piso del pabellon de consultorios externos del hospital. .org.ar",
      "detailUrl": "/servicios/inmunocomprometidos.html"
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
      "location": "Comité Organizador de las Jornadas Multidisciplinarias y de Enfermería del Hospital Ramos Mejía (Año 2026). Sede: Aula Magna y Auditorio Central. Entrega del Premio Bienal de la Revista del Hospital. Informes e inscripciones en la Secretaría del CODEI (Tel: 4127-0200 Int. 1439).",
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
      "chief": "",
      "location": "Ubicación 3° Piso ala izquierda Pabellón Quirúrgico: consultorios externos y gimnasio Subsuelo ala derecha Pabellón Quirúrgico: gimnasio de Rehabilitación Cardio-Pulmonar",
      "detailUrl": "/servicios/kinesiologia.html"
    },
    {
      "id": "laboratorio",
      "file": "laboratorio.html",
      "title": "Laboratorio",
      "category": "Diagnóstico y Tratamiento",
      "planImg": "/de/laborat.gif",
      "phone": "4127-0200 (Int. 1347 / 1348)",
      "email": "",
      "chief": "",
      "location": "El Servicio se encuentra ubicado en la Planta Baja, entre los pabellones de la Guardia Médica y Endocrinología. Comparte sus instalaciones con la Unidad Parasitología y el Laboratorio de Urgencias.",
      "detailUrl": "/servicios/laboratorio.html"
    },
    {
      "id": "medicinadeldeporte",
      "file": "medicinadeldeporte.html",
      "title": "Medicina del Deporte",
      "category": "Médica",
      "planImg": "/de/psico.gif",
      "phone": "4127-0200 (Int. 1287)",
      "email": "",
      "chief": "",
      "location": "El servicio de Medicina del Deporte se encuentra en el pabellón de Area Programática que se encuentra ubicado ingresando al hospital por el pasillo izquierdo hasta el fondo y luego doblando hacia la izquierda.",
      "detailUrl": "/servicios/medicinadeldeporte.html"
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
      "chief": "",
      "location": "El consultorio de Nefrología se encuentra en el primer piso, puerta Nº 123 del pabellón de consultorios externos.",
      "detailUrl": "/servicios/nefrologia.html"
    },
    {
      "id": "neonatologia",
      "file": "neonatologia.html",
      "title": "Neonatología",
      "category": "Materno-Infantil",
      "planImg": "/de/neonat.gif",
      "phone": "4127-0200 (Int. 1384)",
      "email": "",
      "chief": "",
      "location": "El Servicio de Neonatologia se encuentra en el segundo piso del pabellon cirugia",
      "detailUrl": "/servicios/neonatologia.html"
    },
    {
      "id": "neumotisiologia",
      "file": "neumotisiologia.html",
      "title": "Neumotisiología",
      "category": "Médica",
      "planImg": "/de/neumo.gif",
      "phone": "4127-0200 (Int. 1118)",
      "email": "neumotisiologia.ramosmejia@gmail.com",
      "chief": "",
      "location": "El servicio Neumotisiologia y los consultorios para practicas especializadas se encuentra en 2º y 3º piso del pabellón de Clinica Medica. El consultorio externo Nº 118 se encuentra en el ala izquierda del primer piso del pabellon de consultorios externos. Instagram: @neumoramos2019",
      "detailUrl": "/servicios/neumotisiologia.html"
    },
    {
      "id": "neurocirugia",
      "file": "neurocirugia.html",
      "title": "Neurocirugía",
      "category": "Quirúrgica",
      "planImg": "/de/neurocir.gif",
      "phone": "4127-0200 (Int. 1123)",
      "email": "neurocirugia.ramos@yahoo.com.ar",
      "chief": "",
      "location": "El servicio de Neurocirugia se encuentra en el primer piso, ala izquierda del pabellon quirurgico.",
      "detailUrl": "/servicios/neurocirugia.html"
    },
    {
      "id": "neurologia",
      "file": "neurologia.html",
      "title": "Neurología",
      "category": "Médica y Neurociencias",
      "planImg": "/de/neuro.gif",
      "phone": "4127-0200 (Int. 1233)",
      "email": "",
      "chief": "",
      "location": "El servicio de Neurologia se encuentra en 1º piso del primer pabellon del pasillo izquierdo del hospital. El consultorio externo Nº 152 se encuentra en el ala izquierda del primer piso del pabellon de consultorios externos.",
      "detailUrl": "/servicios/neurologia.html"
    },
    {
      "id": "nutricion",
      "file": "nutricion.html",
      "title": "Nutrición y Diabetes",
      "category": "Médica",
      "planImg": "/de/nut.gif",
      "phone": "4127-0200 (Int. 1333)",
      "email": "",
      "chief": "",
      "location": "El servicio de Nutrición y Diabetes se encuentra en el consultorio 151 del ala izquierda del pabellón de consultorios externos.",
      "detailUrl": "/servicios/nutricion.html"
    },
    {
      "id": "obstetricia",
      "file": "obstetricia.html",
      "title": "Obstetricia",
      "category": "Materno-Infantil",
      "planImg": "/de/obste.gif",
      "phone": "4127-0200 (Int. 1260)",
      "email": "",
      "chief": "",
      "location": "El Servicio de Obstetricia se encuentra en el segundo piso del ala izquierda del pabellon quirurgico Los consultorios externos Nº 117, 117bis y 125 se encuentran en el ala derecha del primer piso del pabellon de consultorios externos",
      "detailUrl": "/servicios/obstetricia.html"
    },
    {
      "id": "odontologia",
      "file": "odontologia.html",
      "title": "Odontología",
      "category": "Médica",
      "planImg": "/de/odonto.gif",
      "phone": "4127-0200 (Int. 1320)",
      "email": "",
      "chief": "",
      "location": "El servicio de odontologia se encuentra en el consultorio Nº 100 del ala derecha del primer piso del pabellon de consultorios externos",
      "detailUrl": "/servicios/odontologia.html"
    },
    {
      "id": "oftalmologia",
      "file": "oftalmologia.html",
      "title": "Oftalmología",
      "category": "Médica",
      "planImg": "/de/amb.gif",
      "phone": "4127-0200 (Int. 1318)",
      "email": "",
      "chief": "",
      "location": "El servicio de Oftalmología se encuentra en el pabellón ORL/OFTALMOLOGÍA, se accede por el pasillo derecho del hospital.",
      "detailUrl": "/servicios/oftalmologia.html"
    },
    {
      "id": "oncologia",
      "file": "oncologia.html",
      "title": "Oncología",
      "category": "Médica",
      "planImg": "/de/onco.gif",
      "phone": "4127-0200 (Int. 1234 / 1235)",
      "email": "ramosmejiaoncologia@gmail.com",
      "chief": "",
      "location": "El servicio de Oncología se encuentra en el subsuelo del pabellón de Diagnóstico por Imágenes al que se accede ORL/OFTALMOLOGÍA, se accede por el pasillo izquierdo del hospital. .com",
      "detailUrl": "/servicios/oncologia.html"
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
      "chief": "",
      "location": "El servicio de Otorrinolaringología se encuentra en el pabellón propio que el servicio posee, al cual se accede por el pasillo derecho del hospital. El consultorio externo esta ubicado en el subsuelo del mismo.",
      "detailUrl": "/servicios/orl.html"
    },
    {
      "id": "osteoporosis",
      "file": "osteoporosis.html",
      "title": "Osteoporosis",
      "category": "Médica",
      "planImg": "/de/reumato.gif",
      "phone": "4127-0200 (Int. 1286)",
      "email": "reumatologiarm@gmail.com",
      "chief": "",
      "location": "El Centro Nacional de Referencia en Osteoporosis se encuentra en la planta baja del pabellon de Clinica Medica. El consultorio externo Nº 128 y el consultorio de densitometria osea Nº 131 se encuentran en el ala izquierda del primer piso del pabellon de consultorios externos. .com",
      "detailUrl": "/servicios/osteoporosis.html"
    },
    {
      "id": "patologia",
      "file": "patologia.html",
      "title": "Anatomía Patológica",
      "category": "Diagnóstico y Tratamiento",
      "planImg": "/de/anatomia.gif",
      "phone": "4127-0200 (Int. 1347)",
      "email": "citologiaramosmejia@gmail.com",
      "chief": "",
      "location": "Anatomia Patologica se encuentra en el pabellon propio que el servicio posee, al cual se accede ingresando al hospital por el pasillo izquierdo y dirigiendose luego al angulo que forman las calles Mexico y 24 de noviembre. Teléfonos: Anatomía patológica: 4127-0200 interno 1347 Citopatología: 4127-0200 interno 1346 Email de Citopatología",
      "detailUrl": "/servicios/patologia.html"
    },
    {
      "id": "pediatria",
      "file": "pediatria.html",
      "title": "Pediatría",
      "category": "Materno-Infantil",
      "planImg": "/de/pediat.gif",
      "phone": "4127-0200 (Int. 1264)",
      "email": "",
      "chief": "",
      "location": "La sala de internación y el consultorio de pediatria se encuentran en el pabellon de Pediatría, que se encuentra ingresando por el pasillo que bordea la capilla por el lado izquierdo.",
      "detailUrl": "/servicios/pediatria.html"
    },
    {
      "id": "porfirias",
      "file": "porfirias.html",
      "title": "Porfirias",
      "category": "Médica",
      "planImg": "/de/geriat.gif",
      "phone": "4127-0200 (Int. 1266)",
      "email": "Consultorio.Porfirias.HRM@gmail.com",
      "chief": "",
      "location": "El consultorio externo Nº 126 se encuentra en el primer piso del pabellón de consultorios externos. Teléfono: 5950-8346/47",
      "detailUrl": "/servicios/porfirias.html"
    },
    {
      "id": "reumatologia",
      "file": "reumatologia.html",
      "title": "Reumatología",
      "category": "Médica",
      "planImg": "/de/reumato.gif",
      "phone": "4127-0200 (Int. 1265)",
      "email": "reumatologiarm@gmail.com",
      "chief": "",
      "location": "El Centro Nacional de Referencia en Osteoporosis se encuentra en la planta baja del pabellon de Clinica Medica. El consultorio externo Nº 128 y el consultorio de densitometria osea Nº 131 se encuentran en el ala izquierda del primer piso del pabellon de consultorios externos. .com",
      "detailUrl": "/servicios/reumatologia.html"
    },
    {
      "id": "revista",
      "file": "revista.html",
      "title": "Revista del Hospital Ramos Mejía",
      "category": "Institucional y Docencia",
      "planImg": "",
      "phone": "4127-0200 (Int. 1439)",
      "email": "",
      "chief": "",
      "location": "",
      "detailUrl": "/servicios/revista.html"
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
      "chief": "",
      "location": "El Servicio Social se encuentra en la planta baja del ala derecha del primer pabellon del hospital. .gov.ar",
      "detailUrl": "/servicios/serviciosocial.html"
    },
    {
      "id": "traumatologia",
      "file": "traumatologia.html",
      "title": "Traumatología y Ortopedia",
      "category": "Quirúrgica",
      "planImg": "/de/traumato.gif",
      "phone": "4127-0200 (Int. 1310)",
      "email": "",
      "chief": "",
      "location": "El Servicio de Ortopedia y Traumatologia se encuentra en la planta baja del ala izquierda del pabellon quirurgico. El consultorio externo se encuentra en el inicio del pasillo derecho del hospital.",
      "detailUrl": "/servicios/traumatologia.html"
    },
    {
      "id": "urologia",
      "file": "urologia.html",
      "title": "Urología",
      "category": "Quirúrgica",
      "planImg": "/de/uro.gif",
      "phone": "4127-0200 (Int. 1308)",
      "email": "",
      "chief": "",
      "location": "La sala de internación y el sector para las practicas especializadas se encuentra en la planta baja del ala derecha del pabellón cirugia. Los consultorios externos Nº 133 y 134 se encuentran en el ala izquierda del primer piso del pabellon de consultorios externos.",
      "detailUrl": "/servicios/urologia.html"
    },
    {
      "id": "uti",
      "file": "uti.html",
      "title": "Terapia Intensiva",
      "category": "Cuidados Críticos",
      "planImg": "/de/uti.gif",
      "phone": "4127-0200 (Int. 1429 / 1441)",
      "email": "ramosmejia_serviciosocial@buenosaires.gov.ar",
      "chief": "",
      "location": "El servicio de Terapia Intensiva se encuentra en el cuarto piso del ala derecha del pabellon cirugia. .gov.ar",
      "detailUrl": "/servicios/uti.html"
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
  "journalEditions": [
    {
      "volume": "Volumen XXVIII - Convocatoria Abierta",
      "year": String(CURRENT_YEAR),
      "status": `Edición en Curso (Año ${CURRENT_YEAR})`,
      "isOpenCall": true,
      "awardInfo": `🏆 Postulación abierta al PREMIO BIENAL REVISTA HOSPITAL RAMOS MEJÍA ${CURRENT_YEAR} (Entrega: Diciembre ${CURRENT_YEAR} - Día del Médico)`,
      "downloadUrl": "/servicios/revista.html",
      "articles": [
        {
          "title": "Innovación en cirugía mínimamente invasiva y protocolos de recuperación acelerada postquirúrgica (ERAS)",
          "authors": "División Cirugía General A y B, Servicio de Anestesiología"
        },
        {
          "title": "Evaluación del impacto del programa de estimulación temprana en el neurodesarrollo en Centros de Salud Comunitarios (CeSAC 11 y 45)",
          "authors": "Área Programática y Servicio de Psicopedagogía"
        },
        {
          "title": "Buenas Prácticas Clínicas (GCP) y procedimientos éticos en investigación biomédica: Guía 2026",
          "authors": "Comité de Ética en Investigación (CEI) - Hospital Ramos Mejía"
        }
      ]
    },
    {
      "volume": "Volumen XXVII - Investigaciones Asistenciales",
      "year": "2024 - 2025",
      "status": "Edición Publicada",
      "downloadUrl": "https://1drv.ms/f/c/7343c1a96494fc07/Egf8lGSpwUMggHP1BgAAAAABlOpjNqFoVU6bPmgdJNlPUw?e=IEh6WM",
      "articles": [
        {
          "title": "Abordaje endovascular y tiempos de ventana en el ACV isquémico agudo: experiencia del Centro de Stroke",
          "authors": "Kim L., Alet M., Claverie S., González L., Rey R.C."
        },
        {
          "title": "Optimización del uso de antimicrobianos en Unidades de Cuidados Críticos y Terapia Intensiva",
          "authors": "Comité de Control de Infecciones y Servicio de Farmacia"
        }
      ]
    },
    {
      "volume": "Volumen XXV - Nº 1",
      "year": "2022",
      "status": "Edición Electrónica",
      "downloadUrl": "https://1drv.ms/f/c/7343c1a96494fc07/Egf8lGSpwUMggHP1BgAAAAABlOpjNqFoVU6bPmgdJNlPUw?e=IEh6WM",
      "articles": [
        {
          "title": "Percepciones y prácticas acerca de la estimulación del lenguaje que refieren cuidadores en el Área Programática",
          "authors": "Drault Boedo M.G., Rubio Domínguez M.G."
        }
      ]
    },
    {
      "volume": "Volumen XXV - Nº 1",
      "year": "2021",
      "status": "Edición Electrónica",
      "downloadUrl": "https://1drv.ms/f/c/7343c1a96494fc07/Egf8lGSpwUMggHPvBgAAAAABtPdW5XblQ5uCJlET9nz16w?e=gnAQJG",
      "articles": [
        {
          "title": "Trastorno del Espectro Autista: Características y abordaje interdisciplinario",
          "authors": "Almirón A.B., Brandes D., Drault Boedo M.G. y col."
        },
        {
          "title": "Atención nutricional y seguimiento en pacientes internados de alta complejidad",
          "authors": "Calegari M. Lara, Vieytes Lucía M."
        }
      ]
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
      "id": "noticia-1",
      "date": "10 de Septiembre de 2026",
      "tag": "Investigación y Docencia",
      "title": "Convocatoria Abierta 2026: Presentación de Trabajos y Premio Bienal Revista del Hospital",
      "summary": "El Comité de Docencia e Investigación (CODEI) convoca a todos los profesionales de la salud a postular sus manuscritos científicos para el Volumen XXVIII y participar por el Premio Bienal 2026, a entregarse en diciembre.",
      "link": "#revista",
      "isInternal": true
    },
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
  ]
};
