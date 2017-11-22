import { DetailComponent } from './detail.component';
import { UserRouteAccessService } from '../shared/auth/user-route-access-service';

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
