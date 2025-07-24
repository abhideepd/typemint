import { MainWindowComponent } from './main-window/main-window.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : '',
    redirectTo: 'window',
    pathMatch: 'full'
  },
  {
    path : 'window',
    component: MainWindowComponent
  }
];
