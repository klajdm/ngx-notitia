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
      {
        path: 'documentation',
        loadComponent: () =>
          import('./main/documentation/documentation.component').then(
            m => m.DocumentationComponent,
          ),
        title: 'Documentation | Angular Notitia',
      },
      {
        path: 'development/contributing',
        loadComponent: () =>
          import('./main/contributing/contributing.component').then(m => m.ContributingComponent),
        title: 'Contributing | Angular Notitia',
      },
      {
        path: 'development/code-of-conduct',
        loadComponent: () =>
          import('./main/code-of-conduct/code-of-conduct.component').then(
            m => m.CodeOfConductComponent,
          ),
        title: 'Code of Conduct | Angular Notitia',
      },
      {
        path: 'license',
        loadComponent: () =>
          import('./main/license/license.component').then(m => m.LicenseComponent),
        title: 'License | Angular Notitia',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('../app/main/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Not Found',
  },
];
