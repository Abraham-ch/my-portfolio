import {
  BelcorpMvp,
  BessSolar,
  GaloissAcademy,
  JWControl,
  RxTeeth,
  SkyTech,
  SmartTransit,
  Surichakra,
} from '@/assets/img/Projects'

export const About = {
  title: ['Desarrollador Frontend', 'Diseñador UI/UX'],
  description:
    'Desarrollador Full-Stack, especializado en Frontend con una sólida base en electrónica y programación, enfocado en el desarrollo de software y el uso de herramientas tecnológicas. Experiencia en la creación de soluciones innovadoras y coordinación de iniciativas que integran tecnología y estrategia para el crecimiento de nuevos proyectos.',
}

export const Services = [
  {
    title: 'Identidad de Marca.',
    description:
      'Llevar la historia de tu marca al frente le da una dimensión emocional a tu identidad visual, lo cual es esencial hoy más que nunca en el panorama digital actual.',
  },
  {
    title: 'Tecnología.',
    description:
      'Llevar la historia de tu marca al frente le da una dimensión emocional a tu identidad visual, lo cual es esencial hoy más que nunca en el panorama digital actual.',
  },
  {
    title: 'Diseño UX/UI.',
    description:
      'Llevar la historia de tu marca al frente le da una dimensión emocional a tu identidad visual, lo cual es esencial hoy más que nunca en el panorama digital actual.',
  },
]

export const Experiences = [
  {
    title: 'JW Control',
    description:
      'Diseño y desarrollo de una página de aterrizaje con Astro, integrada con Sanity CMS para la gestión de contenido. Usé tailwindcss para los estilos, OpenGraph para metadatos sociales, publicado en Vercel con dominio gestionado a través de Cloudflare.',
    link: 'https://jw-control.com',
    img: JWControl,
  },
  {
    title: 'Galoiss Academy',
    description:
      'Desarrollé una plataforma de e-commerce completa para energía solar con funcionalidad de carrito de compras y sistema de cotización automatizado vía email y WhatsApp. Construido usando Remix, TypeScript y TailwindCSS, con Sanity como CMS headless y EmailJS para formularios de contacto. Desplegado en Vercel con dominio de Cloudflare.',
    link: 'https://qr-assistance.vercel.app',
    img: GaloissAcademy,
  },
  {
    title: 'Bess Solar',
    description:
      'Desarrollé una plataforma de e-commerce responsive para Bess Solar, una empresa de energía limpia. La plataforma cuenta con integración de CMS, funcionalidad de carrito de compras y sistema de cotización integrado con enrutamiento de WhatsApp/email. También incluye un panel para seguimiento de pedidos, clientes y ventas.',
    link: 'https://bess-solar.vercel.app',
    img: BessSolar,
  },
  {
    title: 'App de Segmentación RX',
    description:
      'Construí una aplicación de escritorio multiplataforma (Electron, Vite, TypeScript) integrando un modelo exportado en ONNX para inferencia en tiempo real (<3s/imagen) con visualizaciones intuitivas de cajas delimitadoras.',
    link: 'https://github.com/Abraham-ch/Rx-TeethLesion',
    img: RxTeeth,
  },
  {
    title: 'Surichakra',
    description:
      'Participé desde el inicio en el desarrollo y evolución de una startup, diseñando interfaces accesibles e intuitivas a través de Figma, con Frameworks como Remix, Vite usando bibliotecas UI como tailwindcss y shadcn/ui, integrando Sanity como CMS.',
    link: '',
    img: Surichakra,
  },
  {
    title: 'SkyTech',
    description:
      'Diseñé y desarrollé una página de aterrizaje responsive para SkyTech, una empresa de consultoría. Entregué una interfaz moderna y amigable con rendimiento optimizado y compatibilidad móvil, asegurando una experiencia fluida en todos los dispositivos.',
    link: 'https://skytech-services.vercel.app/',
    img: SkyTech,
  },
  {
    title: 'Smart Transit UI',
    description:
      'Presentando el diseño para Smart Transit, una aplicación web desarrollada para SkyTech. Proporciona seguimiento de autobuses en tiempo real, paradas cercanas y planificación de rutas, todo en una plataforma intuitiva. Diseñado para eficiencia y facilidad de uso.',
    link: 'https://www.figma.com/community/file/1415097760195199937/smart-transit-landing-page',
    img: SmartTransit,
  },
  {
    title: 'Belcorp Mvp',
    description:
      'Primer diseño del registro para una aplicación de cuidado de la piel, hecho para el Hackaton de Belcorp.',
    link: 'https://www.figma.com/community/file/1429287727958038197/mobile-ui-register',
    img: BelcorpMvp,
  },
]

export const Skills = [
  {
    title: 'Desarrollo Front-End',
    description:
      'Construcción de interfaces web atractivas y fáciles de usar utilizando frameworks y tecnologías modernas con experiencia.',
    icons: ['HTML', 'JavaScript', 'TypeScript', 'React', 'NextJS'],
  },
  {
    title: 'Desarrollo Back-End',
    description:
      'Desarrollo de lógica del lado del servidor robusta y APIs para impulsar aplicaciones web dinámicas y escalables.',
    icons: ['Nodejs', 'Express'],
  },
  {
    title: 'Conceptos Fundamentales de Ciencias de la Computación',
    description:
      'Demostrando una sólida base en principios fundamentales de ciencias de la computación, incluyendo resolución de problemas, diseño de sistemas y técnicas de computación eficientes.',
    skills: [
      'Sistemas Operativos',
      'Redes de Computadoras',
      'Programación Orientada a Objetos',
      'Estructuras de Datos y Algoritmos',
      'Diseño de Sistemas',
    ],
  },
  {
    title: 'Desarrollo Personal',
    description:
      'Comprometido con el aprendizaje continuo y el crecimiento personal para sobresalir en entornos profesionales y colaborativos.',
    skills: [
      'Gestión del Tiempo',
      'Resolución de Problemas',
      'Comunicación',
      'Liderazgo',
    ],
  },
  {
    title: 'Estilos y Diseño',
    description:
      'Elaboración de diseños visualmente atractivos y responsivos con herramientas y frameworks de estilo avanzados.',
    icons: ['CSS', 'Tailwindcss', 'MUI'],
  },
  {
    title: 'Animaciones Web',
    description:
      'Creación de animaciones y transiciones fluidas para mejorar el compromiso e interactividad del usuario.',
    icons: ['FramerMotion'],
  },
  {
    title: 'Nube y Despliegue',
    description:
      'Experiencia en despliegue y gestión de aplicaciones usando plataformas y herramientas de nube modernas.',
    icons: ['Docker', 'Vercel'],
  },
  {
    title: 'Pruebas y Depuración',
    description:
      'Asegurando la calidad y confiabilidad del código a través de procesos rigurosos de pruebas y depuración.',
    icons: ['Jest', 'Postman'],
  },
  {
    title: 'Lenguajes de Programación',
    description:
      'Competente en resolución de problemas y aplicación de lenguajes de programación para implementar estructuras de datos y algoritmos eficientes.',
    icons: ['Python', 'C', 'CPlus'],
  },
  {
    title: 'Gestión de Bases de Datos',
    description:
      'Diseño y gestión de bases de datos para asegurar almacenamiento y recuperación de datos segura y eficiente.',
    icons: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Desarrollo de Aplicaciones Móviles',
    description:
      'Creación de aplicaciones móviles multiplataforma con diseños elegantes y funcionalidad robusta.',
    icons: ['React'],
  },
  {
    title: 'Control de Versiones y Colaboración',
    description:
      'Gestión efectiva de código y colaboración en proyectos para asegurar trabajo en equipo fluido.',
    icons: ['Git', 'Github'],
  },
  {
    title: 'Diseño UI/UX',
    description:
      'Diseño de interfaces centradas en el usuario que son intuitivas, visualmente atractivas y fáciles de navegar.',
    skills: ['Prototipado', 'Wireframing'],
    icons: ['Figma'],
  },
]

export const InTouch = {
  title: 'Construyamos algo',
  titleHighlight: 'increíble juntos',
  description:
    'Siempre estoy emocionado de colaborar en nuevos proyectos, discutir ideas innovadoras, o simplemente tener una conversación sobre tecnología y desarrollo. Creemos algo extraordinario.',
  features: [
    {
      title: 'Tiempo de respuesta rápido',
      icon: 'lightning',
    },
    {
      title: 'Colaboración profesional',
      icon: 'check',
    },
    {
      title: 'Soluciones flexibles',
      icon: 'adjustments',
    },
  ],
  form: {
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu correo electrónico',
    messagePlaceholder: 'Cuéntame sobre tu proyecto...',
    submitButton: 'Enviar Mensaje',
    formTitle: 'Trabajemos juntos',
    formSubtitle: 'Ayudemos a que tus proyectos construyan mejor.',
    nameLabel: 'Nombre',
    emailLabel: 'Correo electrónico',
    messageLabel: '¿Cómo puedo ayudarte?',
    namePlaceholderFull: 'Nombre y apellido',
    emailPlaceholderFull: 'Correo de trabajo',
    messagePlaceholderFull: 'Cuéntame sobre las necesidades de tu proyecto',
    submitButtonFull: 'Ponerse en contacto',
    toastTitle: 'Mensaje enviado',
    toastDescription: 'Muchas gracias por contactarme :)',
  },
}

export const Navigation = {
  menu: 'MENÚ',
  sections: {
    main: 'Inicio',
    services: 'Servicios',
    experience: 'Experiencia',
    skills: 'Habilidades',
    contact: 'Contacto',
  },
}

export const Subtitles = {
  services: 'Servicios',
  experience: 'Algo de mi experiencia reciente :)',
  skills: 'Habilidades',
}
