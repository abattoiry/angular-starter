import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { YunXinService } from '../yunxin/yunxin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthServerProvider {
  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
  ) { }

  getToken() {
    return this.$localStorage.retrieve('authenticationToken') ||
      this.$sessionStorage.retrieve('authenticationToken');
  }
  // 登录
  login(credentials): Observable<any> {

    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('username', credentials.username);
    data.append('password', credentials.password);
    data.append('scope', 'web');
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic d2ViX2FwcDo='
    });

    return this.http.post('', data, {
      headers
    }).map((res) => {
      // 获取返回的token值
      const accessToken = res['access_token'];
      if (accessToken) {
        this.storeAuthenticationToken(accessToken, credentials.rememberMe);
      }

      return accessToken;
    });
  }

  loginWithToken(jwt, rememberMe) {
    if (jwt) {
      this.storeAuthenticationToken(jwt, rememberMe);
      return Promise.resolve(jwt);
    } else {
      return Promise.reject('auth-jwt-service Promise reject');
    }
  }

  storeAuthenticationToken(jwt, rememberMe) {
    if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
    }
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      this.$localStorage.clear('authenticationToken');
      this.$sessionStorage.clear('authenticationToken');
      observer.complete();
    });
  }
}
