import { NgModuleRef } from '@angular/core';

export interface Environment {
  origin?: string;
  production: boolean;
  ENV_PROVIDERS: any;
  showDevModule: boolean;
  decorateModuleRef(modRef: NgModuleRef<any>): NgModuleRef<any>;
}
