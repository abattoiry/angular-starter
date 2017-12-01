import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { EmptyHeaderComponent } from 'app/headers/empty-header.component';
import { HeaderComponent } from 'app/headers/default-header/header.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    children: [
      { path: '', component: AboutComponent },
      // { path: '', component: EmptyHeaderComponent, outlet: 'header', },
    ]
  },
  { path: 'detail', loadChildren: './+detail#DetailModule' },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
  { path: '**', component: NoContentComponent },
];
