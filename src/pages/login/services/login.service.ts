import { Injectable } from '@angular/core';
import { urlService } from '../../../core/globals';
import { Http } from '@angular/http';
import { Credentials } from '../interfaces/credentials';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ServiceLogin {
    constructor(private _http: Http) { }
    
    async signIn(credentials: Credentials) {
        const response = await this._http.post(urlService + 'Session/Login', credentials).toPromise();
        return response.json();
    }
}