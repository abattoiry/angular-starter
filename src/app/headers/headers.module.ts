import { HeaderComponent } from './default-header/header.component';
import { NgModule } from '@angular/core';
import { EmptyHeaderComponent } from './empty-header.component';

@NgModule({
  imports: [
  ],
  exports: [
    EmptyHeaderComponent,
    HeaderComponent,
  ],
  declarations: [
    EmptyHeaderComponent,
    HeaderComponent,
  ],
  providers: [],
})
export class HeadersModule {
}
