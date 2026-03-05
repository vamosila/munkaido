/*
* File: app.routes.ts
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: SZOFT II-N
* Date: 2026-03-05
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'work', component: WorkComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
