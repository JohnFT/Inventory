import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../../../interfaces/user';
import 'rxjs/add/operator/toPromise';
import { urlService } from '../../../core/globals';
import { Result } from '../../../interfaces/Result';

@Injectable()
export class ServiceSignUp {
    constructor(private _http: Http) { }

    async addUser(user: User): Promise<Result> {
        const response = await this._http.post(urlService + 'User', user).toPromise();
        return response.json();
    }
}