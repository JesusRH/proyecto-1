import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons/page/:page',
    loadComponent: () => import('./pages/pokemons/pokemons-page.component'),
  },
  {
    path: 'pokemons/:id',
    loadComponent: () => import('./pages/pokemon/pokemon-page.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page.component'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-page.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page.component'),
  },
  {
    path: 'loggin',
    loadComponent: () => import('./pages/loggin/loggin'),
  },
  {
    path: 'mina',
    loadComponent: () => import('./pages/mina/mina.component'),
  },
   {
    path: 'resgistro_unidades',
    loadComponent: () => import('./pages/registro-unidades/registro-unidades.component'),

  },

  {
    path: '**',
    redirectTo: () => {
      // const authService = inject(AuthService)

      return 'loggin';
    },
  },
];
