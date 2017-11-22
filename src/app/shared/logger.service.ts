import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  private log(msg: any) {
    console.log(msg);
  }
  private error(msg: any) {
    console.error(msg);
  }
  private warn(msg: any) {
    console.warn(msg);
  }
}
