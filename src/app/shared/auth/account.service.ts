import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
    constructor(private http: HttpClient) { }
    // 获取用户信息
    get(): Observable<any> {
        return this.http.get('').map((res: Response) => res.json());
    }
    // 更新用户信息
    save(account: any): Observable<any> {
        return this.http.post('', account);
    }
}
