import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home)
      },
      {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
      },
      {
        path: 'skills',
        loadComponent: () => import('./skills/skills').then(m => m.Skills)
      },
      {
        path: 'projects',
        loadComponent: () => import('./projects/projects').then(m => m.Projects)
      },
      {
        path: 'case-studies',
        loadComponent: () => import('./case-studies/case-studies').then(m => m.CaseStudies)
      },
      {
        path: 'experience',
        loadComponent: () => import('./experience/experience').then(m => m.Experience)
      },
      {
        path: 'services',
        loadComponent: () => import('./services/services').then(m => m.Services)
      },
      {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact)
      }
    ]
  }
];
