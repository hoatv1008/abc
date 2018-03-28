import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http, private apiConfig: ApiConfiguration) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    authorize() {
        let url = this.apiConfig.rootUrl + '/oauth/authorize?client_id='+this.apiConfig.clientId+'&redirect_uri=' + encodeURI('http://localhost:4200/login') + '&response_type=code';
        window.location.href = url;
    }

    login(code: any): Observable<boolean> {
        let formData: FormData = new FormData();
        formData.append('client_id', this.apiConfig.clientId);
        formData.append('client_secret', this.apiConfig.clientSecret);
        formData.append('code', code);
        formData.append('grant_type', 'authorization_code');
        formData.append('redirect_uri', this.apiConfig.callbackUrl);

        return this.http.post(this.apiConfig.rootUrl +  '/api/token', formData)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().access_token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: "posabc", token: token }));

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
