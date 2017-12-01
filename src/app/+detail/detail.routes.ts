import { DetailComponent } from './detail.component';
import { UserRouteAccessService } from '../shared/auth/user-route-access-service';
import { HeaderComponent } from 'app/headers/default-header/header.component';
import { EmptyHeaderComponent } from 'app/headers/empty-header.component';

export const routes = [
  {
    path: '',
    children: [
      { path: '', component: DetailComponent },
      { path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
    ],
    canActivate: [UserRouteAccessService],
  },
];
