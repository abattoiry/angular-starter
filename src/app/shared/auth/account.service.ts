import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccountService {
    constructor(private http: Http) { }
    // 获取用户信息
    get(): Observable<any> {
        return this.http.get('').map((res: Response) => res.json());
    }
    // 更新用户信息
    save(account: any): Observable<Response> {
        return this.http.post('', account);
    }
}
