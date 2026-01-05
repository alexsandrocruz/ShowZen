import { RoutesService, eLayoutType } from '@abp/ng.core';
import { provideAppInitializer, inject } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  provideAppInitializer(() => {
    const routes = inject(RoutesService);
    console.log('[ShowZen] Configuring routes...');

    routes.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/schedule-overview',
        name: '::Menu:ScheduleOverview',
        iconClass: 'fas fa-calendar',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/crm',
        name: '::Menu:Pipeline',
        iconClass: 'fas fa-columns',
        order: 3,
        layout: eLayoutType.application,
      },
      {
        path: '/dashboard',
        name: '::Menu:Dashboard',
        iconClass: 'fas fa-tachometer-alt',
        order: 6,
        layout: eLayoutType.application,
      },
      {
        path: '/clients',
        name: '::Menu:Clients',
        iconClass: 'fas fa-briefcase',
        order: 4,
        layout: eLayoutType.application,
      },
      {
        path: '/artists',
        name: '::Menu:Artists',
        iconClass: 'fas fa-users',
        order: 5,
        layout: eLayoutType.application,
      },
      {
        path: '/reports',
        name: '::Menu:Reports',
        iconClass: 'fas fa-chart-bar',
        order: 7,
        layout: eLayoutType.application,
      },
    ]);

    console.log('[ShowZen] Routes configured successfully');
  }),
];
