import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/welcome/welcome.component').then((m) => m.WelcomeComponent),
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./pages/employee/employee.component').then((m) => m.EmployeeComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
