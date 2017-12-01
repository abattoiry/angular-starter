import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { DetailComponent } from './detail.component';
import { HeadersModule } from 'app/headers/headers.module';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    DetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeadersModule,
    RouterModule.forChild(routes),
  ],
})
export class DetailModule {
  public static routes = routes;
}
