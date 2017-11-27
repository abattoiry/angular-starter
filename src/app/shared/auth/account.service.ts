import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
    constructor(private http: HttpClient) { }

    // fetch user info
    get(): Observable<any> {
        return this.http.get('').map((res: Response) => res.json());
    }
    // update user info
    save(account: any): Observable<any> {
        return this.http.post('', account);
    }
}
