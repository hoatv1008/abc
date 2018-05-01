import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http, private apiConfig: ApiConfiguration) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    authorize() {
        let url = this.apiConfig.rootUrl + '/oauth/authorize?client_id=' + this.apiConfig.clientId + '&redirect_uri=' + encodeURI('http://localhost:4200/login') + '&response_type=code';
        window.location.href = url;
    }

    login(): Observable<boolean> {
        let formData: FormData = new FormData();
        formData.append('usernameOrEmailAddress', 'admin');
        formData.append('password', '123qwe');
        formData.append('redirect_uri', this.apiConfig.callbackUrl);

        return this.http.post(this.apiConfig.rootUrl + '/api/TokenAuth/Authenticate',
            {
                usernameOrEmailAddress: 'admin',
                password: '123qwe'
            },
            { headers: new Headers({ 'Content-Type': 'application/json' }) }).map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().result && response.json().result.accessToken;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: "admin", token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    getToken(): string {
        return this.token;
    }
}
