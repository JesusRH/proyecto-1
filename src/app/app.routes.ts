import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons/page/:page',
    loadComponent: () => import('./pages/pokemons/pokemons-page.component')
      .then(m => m.default),
  },
  {
    path: 'pokemons/:id',
    loadComponent: () => import('./pages/pokemon/pokemon-page.component')
      .then(m => m.default),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page.component')
      .then(m => m.default),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-page.component')
      .then(m => m.default),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page.component')
      .then(m => m.default),
  },
  {
    path: 'loggin',
    loadComponent: () => import('./pages/loggin/loggin')
      .then(m => m.default),
  },
  {
    path: 'mina',
    loadComponent: () => import('./pages/mina/mina.component')
      .then(m => m.default),
  },
  {
    path: 'registro-unidades', // 👈 corregido
    loadComponent: () => import('./pages/registro-unidades/registro-unidades.component')
      .then(m => m.default),
  },
  {
    path: 'usuario-receptor',
    loadComponent: () => import('./pages/usuario-receptor/usuario-receptor.component')
      .then(m => m.default),
  },
  {
    path: 'registro-usuarios', // 👈 nueva ruta para tu vista de usuarios
    loadComponent: () => import('./pages/registro-usuarios/registro-usuarios.component')
      .then(m => m.default),
  },
  {
    path: '**',
    redirectTo: () => {
      return 'loggin';
    },
  },
];