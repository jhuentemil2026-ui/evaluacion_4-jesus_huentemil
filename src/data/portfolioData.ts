import type { NavItem, ProjectItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre mí', path: '/sobre-mi' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Habilidades', path: '/habilidades' },
  { label: 'Contacto', path: '/contacto' },
];

export const aboutParagraphs: string[] = [
  'Soy estudiante de Ingeniería Civil Informática en la Universidad Católica de Temuco. Me interesa aprender cómo se conectan las partes de un sistema, desde la base de datos hasta la pantalla que ve el usuario.',
  'Trabajo con Git y GitHub, y practico escribiendo código limpio, probándolo y explicando cómo funciona.',
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'API de reserva de salas',
    description:
      'API REST para reservar salas y laboratorios de la universidad. Proyecto grupal del curso de Desarrollo de Backend.',
    category: 'Backend',
    tags: ['Backend', 'API REST'],
  },
  {
    id: 2,
    title: 'Juego arcade en Python',
    description:
      'Juego arcade hecho con pygame para la evaluación de Cálculo Básico, aplicando funciones y movimiento.',
    category: 'Juegos',
    tags: ['Juegos', 'Python', 'pygame'],
  },
  {
    id: 3,
    title: 'Mi primera web',
    description:
      'Mi primer sitio con HTML y CSS, donde practiqué la estructura de una página y los estilos básicos.',
    category: 'Web',
    tags: ['Web', 'HTML', 'CSS'],
  },
  {
    id: 4,
    title: 'Este portafolio',
    description:
      'Sitio estático responsivo, con modo oscuro, filtro de proyectos y formulario validado. Publicado en GitHub Pages.',
    category: 'Web',
    tags: ['Web', 'HTML', 'CSS', 'JavaScript'],
  },
];

export const skills: string[] = [
  'HTML5 semántico',
  'CSS3 (Flexbox y Grid)',
  'JavaScript',
  'Python',
  'Git y GitHub',
  'APIs REST',
];