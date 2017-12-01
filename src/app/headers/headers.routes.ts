import { HeaderComponent } from './default-header/header.component';
import { EmptyHeaderComponent } from './empty-header.component';

export const HEADERROUTES = [
  {
    path: '', component: HeaderComponent, outlet: 'header',
  },
  {
    path: 'empty', component: EmptyHeaderComponent, outlet: 'header',
  }
];
