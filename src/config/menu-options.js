import { faHome, faBook, faUserAlt } from '@fortawesome/free-solid-svg-icons'

export const menuOptions = [
  {
    text: 'Dashboard',
    name: 'dashboard',
    link: '/app/point',
    icon: faHome
  },
  {
    text: 'Historico',
    name: 'historico',
    link: '/app/history',
    icon: faBook
  },
  {
    text: 'Perfil',
    name: 'perfil',
    link: '/app/profile',
    icon: faUserAlt
  }
]
