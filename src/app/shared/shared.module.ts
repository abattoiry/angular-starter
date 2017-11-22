import { NgModule } from '@angular/core';
import { AccountService } from 'app/shared/auth/account.service';
import { AuthServerProvider } from './auth/auth-jwt.service';
import { CSRFService } from './auth/csrf.service';
import { PrincipalService } from 'app/shared/auth/principal.service';
import { StateStorageService } from 'app/shared/auth/state-storage.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountService,
    AuthServerProvider,
    CSRFService,
    PrincipalService,
    StateStorageService,
  ],
})
export class NameModule { }
