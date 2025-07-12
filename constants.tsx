
import React from 'react';
import { NavItem, Section } from './types';

export const MenuIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const CheckCircleIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ChevronUpIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
);

export const ChevronDownIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export const DownloadIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export const LogoutIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
  </svg>
);


export const LESSON_NAV_ITEMS: NavItem[] = [
    { id: 'introduccion', title: 'Introducción' },
    { id: 'creacion-mundo', title: 'I. La creación del mundo' },
    { id: 'reto-satanas', title: 'II. El reto de Satanás' },
    { id: 'dos-descendencias', title: 'III. Las dos descendencias' },
    { id: 'nuevo-comienzo', title: 'IV. El nuevo comienzo' },
    { id: 'fe-abraham', title: 'V. La fe en Abraham' },
    { id: 'periodo-transicion', title: 'VI. Período de transición' },
    { id: 'jacob', title: 'VII. Jacob, de pecador a santo' },
    { id: 'hijos-jacob', title: 'VIII. Los hijos de Jacob' },
    { id: 'reflexion', title: 'Reflexión Final' },
];

export const RESOURCES_SECTION: Section = {
    id: 'recursos',
    title: 'Recursos Adicionales',
    content: [
      { type: 'heading', level: 2, text: 'Materiales Descargables' },
      { type: 'paragraph', text: 'Aquí encontrarás materiales de apoyo para la lección. Puedes descargar el programa del curso, libros recomendados, mapas y otros documentos útiles.' },
      {
        type: 'resources',
        items: [
          {
            title: 'Syllabus del Curso',
            description: 'Descarga el programa completo del curso con los temas, objetivos y calendario de actividades.',
            url: '#',
          },
          {
            title: 'Libro: "Pentateuco" por Paul Hoff',
            description: 'Versión en PDF del libro de texto principal para esta materia.',
            url: '#',
          },
          {
            title: 'Mapas del Antiguo Oriente',
            description: 'Colección de mapas en alta resolución que ilustran los viajes de los patriarcas y la geografía de la región.',
            url: '#',
          },
          {
            title: 'Otros Recursos',
            description: 'Documentos adicionales, cronologías y guías de estudio para complementar su aprendizaje.',
            url: '#',
          },
        ],
      },
    ],
  };

export const LESSON_SECTIONS: Section[] = [
  {
    id: 'introduccion',
    title: 'Introducción a la Lección',
    content: [
      { type: 'heading', level: 2, text: 'Bienvenido a la Lección 2' },
      { type: 'paragraph', text: 'En esta lección, exploraremos los orígenes del pueblo de Dios según se relata en el libro de Génesis. A través de un estudio detallado, descubriremos los propósitos fundamentales de Dios desde la creación hasta los patriarcas. Prepárate para un viaje interactivo a través de la historia sagrada.' },
      { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }, // Placeholder video
    ],
  },
  {
    id: 'creacion-mundo',
    title: 'I. La creación del mundo (caps. 1 y 2)',
    content: [
      { type: 'heading', level: 3, text: 'El Comienzo de Todo' },
      { type: 'paragraph', text: 'Las palabras con que comienza el Antiguo Testamento hablan de orígenes: la creación del cielo y de la tierra. Se presupone que Dios ya existía. Las Escrituras dicen poco sobre lo que precedió a la creación, indicando que no es esencial para nuestro conocimiento.' },
      { type: 'image', src: 'https://picsum.photos/seed/creation/800/600', alt: 'Imagen abstracta de la creación', caption: 'El universo en su magnificencia.' },
      { type: 'accordion', items: [
          { title: 'La curiosidad humana y la revelación', content: 'Las Escrituras tienen dos respuestas para nuestra curiosidad sobre los misterios de antes de la creación. En Deuteronomio 29.29, se nos dice que las cosas secretas pertenecen al Señor, pero lo revelado nos pertenece a nosotros. Debemos enfocarnos en lo que Dios ha revelado.' },
          { title: 'El propósito divino', content: 'En Efesios 1.4 se enseña que Dios nos escogió en Cristo antes de la fundación del mundo. El propósito era que fuésemos santos y sin mancha delante de él en amor. Este concepto es clave para entender toda la obra de Dios.' }
      ]},
      { type: 'quiz', data: {
          question: 'Según Deuteronomio 29.29, ¿a quién pertenecen las cosas secretas?',
          options: ['A los profetas', 'A la humanidad', 'Al Señor', 'A los ángeles'],
          correctAnswer: 'Al Señor',
          explanation: 'Correcto. Deuteronomio 29.29 establece una distinción clara: "Las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros y para nuestros hijos para siempre".'
      }},
    ],
  },
  {
    id: 'reto-satanas',
    title: 'II. El reto de Satanás al propósito divino (cap. 3)',
    content: [
      { type: 'heading', level: 3, text: 'La Caída del Hombre' },
      { type: 'paragraph', text: 'El capítulo 3 de Génesis introduce la figura de la serpiente, utilizada por Satanás para tentar al hombre y hacerlo pecar. Este evento no fue un simple error, sino un desafío directo a la palabra y autoridad de Dios, con consecuencias que definieron el resto de la historia humana.' },
      { type: 'interactiveImage', 
        src: 'https://picsum.photos/seed/garden/800/600', 
        alt: 'El Jardín del Edén',
        hotspots: [
          { x: 25, y: 50, title: 'La Serpiente', description: 'Representa a Satanás, quien con astucia siembra la duda sobre la Palabra de Dios.' },
          { x: 50, y: 40, title: 'El Árbol Prohibido', description: 'El Árbol de la Ciencia del Bien y el Mal, el punto focal de la prueba de obediencia.' },
          { x: 65, y: 55, title: 'La Mujer (Eva)', description: 'Al dialogar con la serpiente y dudar, inicia el acto de desobediencia.' },
          { x: 75, y: 65, title: 'El Hombre (Adán)', description: 'Su pecado fue no ejercer dominio y seguir a su esposa en la transgresión, abdicando su responsabilidad.' },
        ]
      },
      { type: 'paragraph', text: 'La sutileza de Satanás radicó en hacer que la orden de Dios pareciera irracional y cruel, sembrando el descontento en el corazón de Eva. Este es un retrato del pecado operando en el corazón: desconfiar de la bondad de Dios y desear la autonomía.' },
    ],
  },
  {
    id: 'dos-descendencias',
    title: 'III. Las dos descendencias (caps. 4-8)',
    content: [
      { type: 'heading', level: 3, text: 'Caín y Abel: El Inicio de un Conflicto' },
      { type: 'paragraph', text: 'Tras la caída, la historia humana se divide en dos linajes o "simientes": la de la mujer (los que siguen a Dios) y la de la serpiente (los que se oponen a Él). Esta distinción, anunciada en Génesis 3:15, se materializa por primera vez en la historia de Caín y Abel.' },
       { type: 'quiz', data: {
          question: '¿Cuál fue la diferencia fundamental entre la ofrenda de Caín y la de Abel?',
          options: ['El tipo de material (frutos vs. animales)', 'La cantidad de la ofrenda', 'La actitud del corazón y la fe', 'Una orden explícita de Dios sobre el tipo de sacrificio'],
          correctAnswer: 'La actitud del corazón y la fe',
          explanation: 'Aunque el tipo de ofrenda era distinto, las Escrituras (Hebreos 11:4) enfatizan que por la fe Abel ofreció un sacrificio más excelente. La clave no fue el "qué", sino el "cómo" y el "porqué", que nacen del corazón.'
      }},
    ],
  },
  {
    id: 'nuevo-comienzo',
    title: 'IV. El nuevo comienzo (caps. 9-11)',
    content: [
      { type: 'heading', level: 3, text: 'Después del Diluvio' },
      { type: 'paragraph', text: 'El diluvio representa un juicio y un reinicio para la humanidad. Sin embargo, aunque hay un nuevo comienzo con Noé y su familia, la naturaleza pecadora del hombre persiste. Dios establece un pacto para preservar la vida en la tierra, no por los méritos del hombre, sino por su propia gracia.' },
      { type: 'slideshow', slides: [
          { image: 'https://picsum.photos/seed/ark/800/500', caption: 'Noé y el arca: Un acto de fe y obediencia en medio de un mundo corrupto.'},
          { image: 'https://picsum.photos/seed/rainbow/800/500', caption: 'El arcoíris: La señal del pacto de Dios, un recordatorio de su promesa de no volver a destruir la tierra con agua.'},
          { image: 'https://picsum.photos/seed/babel/800/500', caption: 'La Torre de Babel: Un intento humano de unirse contra Dios, resultando en la dispersión y la diversidad de lenguas.'}
      ]}
    ],
  },
  {
    id: 'fe-abraham',
    title: 'V. La fe en Abraham (caps. 12-22)',
    content: [
      { type: 'heading', level: 3, text: 'El Llamado y la Promesa' },
      { type: 'paragraph', text: 'Con la humanidad dispersa y en rebelión, Dios inicia un nuevo plan centrado en un hombre: Abraham. Su historia es el fundamento de la fe para judíos, cristianos y musulmanes. Dios lo llama a dejar su tierra y le hace una promesa triple que guiará toda la historia de la redención.' },
      { type: 'image', src: 'https://picsum.photos/seed/abraham-stars/800/600', alt: 'Cielo estrellado en el desierto', caption: 'Como las estrellas, así sería la descendencia de Abraham.' },
      { type: 'accordion', items: [
          { title: 'La Tierra Prometida', content: 'Dios prometió a Abraham y a sus descendientes la tierra de Canaán. Este no era solo un pedazo de tierra, sino un lugar donde el pueblo de Dios podría vivir bajo su bendición y ser una luz para las naciones.' },
          { title: 'Una Gran Descendencia', content: 'Aunque Abraham y Sara eran ancianos y sin hijos, Dios les prometió una descendencia tan numerosa como las estrellas del cielo. De esta descendencia vendría el Mesías.' },
          { title: 'Bendición para Todas las Naciones', content: 'A través de Abraham y su "simiente" (refiriéndose en última instancia a Cristo), todas las familias de la tierra serían bendecidas. El plan de Dios siempre fue de alcance mundial.' }
      ]},
      { type: 'heading', level: 4, text: 'La Prueba Máxima de la Fe' },
      { type: 'paragraph', text: 'La fe de Abraham fue probada a lo largo de su vida, culminando en la orden de Dios de sacrificar a Isaac, el hijo de la promesa. Este relato (Génesis 22) es uno de los más dramáticos y teológicamente ricos de las Escrituras.'},
      { type: 'slideshow', slides: [
          { image: 'https://picsum.photos/seed/abraham-journey/800/500', caption: 'El viaje a Moria: Abraham obedece sin dudar, mostrando una confianza absoluta en la soberanía y bondad de Dios.'},
          { image: 'https://picsum.photos/seed/abraham-altar/800/500', caption: '"Dios proveerá el cordero", responde Abraham a Isaac. Su fe no estaba en su propia capacidad, sino en la provisión de Dios.'},
          { image: 'https://picsum.photos/seed/abraham-ram/800/500', caption: 'El carnero en el zarzal: Dios proveyó un sustituto, prefigurando el sacrificio de Cristo como el Cordero de Dios que quita el pecado del mundo.'}
      ]},
      { type: 'quiz', data: {
          question: 'Según Romanos 4, ¿cómo fue declarado justo Abraham ante Dios?',
          options: ['Por sus obras y obediencia', 'Por su fe en la promesa de Dios', 'Por el acto de la circuncisión', 'Por haber dejado su tierra natal'],
          correctAnswer: 'Por su fe en la promesa de Dios',
          explanation: '¡Correcto! El apóstol Pablo enfatiza que a Abraham "le fue contada su fe por justicia". Su justificación no se basó en sus méritos, sino en su confianza en la palabra de Dios, un principio clave de la fe cristiana.'
      }},
    ]
  },
  {
    id: 'periodo-transicion',
    title: 'VI. Período de transición',
    content: [
      { type: 'heading', level: 3, text: 'Isaac: El Hijo de la Promesa' },
      { type: 'paragraph', text: 'Isaac es una figura de transición crucial, pero a menudo subestimada. Él es el puente entre la fe fundacional de Abraham y el linaje tumultuoso de Jacob. Su vida, más tranquila que la de su padre y su hijo, demuestra la fidelidad continua de Dios al pacto.' },
      { type: 'interactiveImage', 
        src: 'https://picsum.photos/seed/isaac-well/800/600', 
        alt: 'Rebeca en el pozo',
        hotspots: [
          { x: 30, y: 60, title: 'Eliezer, el siervo', description: 'Enviado en una misión de fe para encontrar una esposa para Isaac de entre su parentela, demostrando confianza en la guía de Dios.' },
          { x: 55, y: 50, title: 'Rebeca', description: 'Su generosidad y proactividad al dar de beber al siervo y a sus camellos fue la señal que confirmó la elección de Dios.' },
          { x: 75, y: 70, title: 'El Pozo', description: 'Los pozos eran centros vitales en el desierto. En la vida de Isaac, cavar pozos y lidiar por ellos simbolizó su perseverancia pacífica y la bendición de Dios.' },
        ]
      },
       { type: 'paragraph', text: 'A diferencia de Abraham, Isaac nunca abandonó la tierra prometida. Enfrentó hambrunas y conflictos con los filisteos, pero perseveró. Su vida es un testimonio de una fe menos espectacular pero constante, centrada en heredar y transmitir la promesa divina.' },
    ]
  },
  {
    id: 'jacob',
    title: 'VII. Jacob, de pecador a santo',
    content: [
      { type: 'heading', level: 3, text: 'Jacob: El Luchador' },
      { type: 'paragraph', text: 'La historia de Jacob es la de una transformación radical. Su nombre significa "suplantador" o "el que agarra el talón", y su vida temprana estuvo marcada por el engaño y la lucha por obtener la bendición por sus propios medios. Sin embargo, Dios lo persiguió con su gracia para convertirlo en Israel, "el que lucha con Dios".' },
      { type: 'image', src: 'https://picsum.photos/seed/jacob-ladder/800/600', alt: 'La escalera de Jacob', caption: 'En Betel, huyendo de su hermano, Jacob sueña con una escalera al cielo. Aquí, Dios le renueva el pacto de Abraham, mostrando que la gracia de Dios lo alcanza incluso en su punto más bajo.' },
      { type: 'heading', level: 4, text: 'De la Astucia a la Sumisión' },
      { type: 'paragraph', text: 'Jacob pasó veinte años en Harán, donde fue engañado por su tío Labán, cosechando lo que había sembrado. Su viaje de regreso a casa culmina en un encuentro nocturno que cambiaría su vida para siempre.'},
      { type: 'interactiveImage', 
        src: 'https://picsum.photos/seed/peniel/800/600', 
        alt: 'Lucha en Peniel',
        hotspots: [
          { x: 45, y: 55, title: 'El Varón Misterioso', description: 'Jacob lucha toda la noche con un "varón", que se entiende como una manifestación de Dios mismo.' },
          { x: 60, y: 65, title: 'La Cadera Dislocada', description: 'Al no poder prevalecer, el varón toca la cadera de Jacob, dejándolo cojo. Esta debilidad física se convirtió en su mayor fortaleza espiritual, recordándole su dependencia de Dios.' },
          { x: 50, y: 40, title: 'La Bendición', description: 'Jacob se niega a soltar al varón hasta que lo bendiga. Su nombre es cambiado a Israel, porque luchó con Dios y con los hombres, y venció, no por su fuerza, sino por su persistencia en buscar a Dios.' },
        ]
      },
      { type: 'quiz', data: {
          question: '¿Qué significa el nuevo nombre de Jacob, "Israel"?',
          options: ['Suplantador', 'Hijo de la promesa', 'El que lucha con Dios', 'Padre de multitudes'],
          correctAnswer: 'El que lucha con Dios',
          explanation: 'Correcto. Su nuevo nombre, Israel, marca un cambio de identidad. Ya no es el engañador que confía en su astucia, sino aquel cuya identidad se define por su encuentro y dependencia de Dios.'
      }},
    ]
  },
  {
    id: 'hijos-jacob',
    title: 'VIII. Los hijos de Jacob',
    content: [
      { type: 'paragraph', text: 'El relato se centra en los doce hijos de Jacob, la fundación de las tribus de Israel y la historia de José. Contenido en desarrollo.' }
    ]
  },
  {
    id: 'reflexion',
    title: 'Reflexión Final',
    content: [
      { type: 'heading', level: 2, text: 'Para Meditar' },
      { type: 'reflection', questions: [
        { question: '¿Cuál fue el concepto más impactante que aprendiste en esta lección y por qué?', perspective: 'Una perspectiva podría ser el propósito eterno de Dios, establecido incluso antes de la creación. Esto da un significado profundo a toda la historia y a nuestra propia existencia, mostrando que no somos un accidente, sino parte de un plan divino de amor.' },
        { question: '¿Cómo se aplica el concepto de las "dos simientes" en el mundo y en tu vida hoy?', perspective: 'Este concepto resalta una división espiritual fundamental que trasciende la cultura o la raza. Nos invita a examinar nuestras lealtades y valores. ¿Vivimos según la Palabra de Dios, confiando en Él (simiente de la mujer), o según nuestra propia sabiduría y deseos, en rebelión contra Él (simiente de la serpiente)?' },
        { question: 'Reflexiona sobre la fe de Abraham al ser probado. ¿Qué aspecto de su camino te inspira más?', perspective: 'La fe de Abraham no fue perfecta; tuvo dudas y cometió errores. Sin embargo, siempre volvía a Dios. Su mayor prueba, ofrecer a Isaac, demostró una confianza absoluta en que Dios podía cumplir sus promesas, incluso resucitando a los muertos. Esto nos enseña que la fe madura a través de las pruebas y se basa en el carácter de Dios, no en nuestras circunstancias.' }
      ]}
    ]
  },
];
