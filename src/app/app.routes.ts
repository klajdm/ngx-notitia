import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/main/main.component').then(m => m.MainComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        // Homepage/Introduction
        loadComponent: () => import('../app/main/home/home.component').then(m => m.HomeComponent),
        title: 'Angular Notitia | A toastr library for Angular',
      },
      // {
      //   path: 'development/contributing',
      //   loadComponent: () =>
      //     import('./features/main/contributing/contributing.component').then(
      //       (m) => m.ContributingComponent
      //     ),
      //   title: 'Contributing | Angular Chronica',
      // },
      // {
      //   path: 'development/code-of-conduct',
      //   loadComponent: () =>
      //     import('./features/main/code-of-conduct/code-of-conduct.component').then(
      //       (m) => m.CodeOfConductComponent
      //     ),
      //   title: 'Code of Conduct | Angular Chronica',
      // },
      // {
      //   path: 'license',
      //   loadComponent: () =>
      //     import('./features/main/license/license.component').then((m) => m.LicenseComponent),
      //   title: 'License | Angular Chronica',
      // },
    ],
  },
  // {
  //   path: '**',
  //   loadComponent: () =>
  //     import('../app/features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  //   title: 'Not Found',
  // },
];
