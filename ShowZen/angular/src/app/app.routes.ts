import { authGuard, permissionGuard } from '@abp/ng.core';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(c => c.createRoutes()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(c => c.createRoutes()),
  },
  {
    path: 'tenant-management',
    loadChildren: () => import('@abp/ng.tenant-management').then(c => c.createRoutes()),
  },
  {
    path: 'setting-management',
    loadChildren: () => import('@abp/ng.setting-management').then(c => c.createRoutes()),
  },
  {
    path: 'books',
    loadComponent: () => import('./book/book.component').then(c => c.BookComponent),
    canActivate: [authGuard, permissionGuard],
  },
  {
    path: 'schedule-overview',
    loadChildren: () => import('./schedule-overview/schedule-overview.module').then(m => m.ScheduleOverviewModule),
  },
  {
    path: 'crm',
    loadChildren: () => import('./crm/crm.module').then(m => m.CrmModule),
  },
  {
    path: 'artists',
    loadComponent: () => import('./artists/artists.component').then(c => c.ArtistsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'clients',
    loadComponent: () => import('./clients/clients.component').then(c => c.ClientsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard, permissionGuard],
  },
  {
    path: 'components-demo',
    loadComponent: () => import('./components-demo/components-demo.component').then(m => m.ComponentsDemoComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(c => c.AboutComponent),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./privacy/privacy.component').then(c => c.PrivacyComponent),
  },
];