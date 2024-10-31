import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/layout/base-dashboard/base-dashboard.component'),
        children: [
            {
                path: 'calendar',
                loadComponent: () => import('./dashboard/pages/calendar/calendar.component')
            },
            {
                path: 'coding',
                loadComponent: () => import('./dashboard/pages/coding/coding.component')
            },
            {
                path: 'document',
                loadComponent: () => import('./dashboard/pages/document/document.component')
            },
            {
                path: 'folder',
                loadComponent: () => import('./dashboard/pages/folder/folder.component')
            },
            {
                path: 'home',
                loadComponent: () => import('./dashboard/pages/home/home.component')
            },
            {
                path: 'private',
                loadComponent: () => import('./dashboard/pages/private/private.component')
            },
            {
                path: 'profile',
                loadComponent: () => import('./dashboard/pages/profile/profile.component')
            },
            {
                path: 'project',
                loadComponent: () => import('./dashboard/pages/project/project.component')
            },
            {
                path: 'work',
                loadComponent: () => import('./dashboard/pages/work/work.component')
            },
            {
                path: '**',
                redirectTo:'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo:'dashboard',
        pathMatch: 'full'
    }
];
