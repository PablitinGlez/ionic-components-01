import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'badges',
    loadChildren: () =>
      import('./badges/badges.module').then((m) => m.BadgesPageModule),
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'badges',
    loadChildren: () =>
      import('./badges/badges.module').then((m) => m.BadgesPageModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./card/card.module').then((m) => m.CardPageModule),
  },
  {
    path: 'grid',
    loadChildren: () =>
      import('./grid/grid.module').then((m) => m.GridPageModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'alerts',
    loadChildren: () =>
      import('./alerts/alerts.module').then((m) => m.AlertsPageModule),
  },
  {
    path: 'acordion',
    loadChildren: () =>
      import('./acordion/acordion.module').then((m) => m.AcordionPageModule),
  },
  {
    path: 'button',
    loadChildren: () =>
      import('./button/button.module').then((m) => m.ButtonPageModule),
  },
  {
    path: 'checbox',
    loadChildren: () =>
      import('./checbox/checbox.module').then((m) => m.ChecboxPageModule),
  },
  {
    path: 'tipografia',
    loadChildren: () =>
      import('./tipografia/tipografia.module').then(
        (m) => m.TipografiaPageModule
      ),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./avatar/avatar.module').then((m) => m.AvatarPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
