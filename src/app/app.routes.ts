import { Routes } from '@angular/router';

import { Home } from './page/home/home';
import { Contacto } from './page/contacto/contacto';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'contacto',
        component: Contacto
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
