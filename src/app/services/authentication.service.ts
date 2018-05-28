import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import swal, { SweetAlertOptions } from 'sweetalert2';
@Injectable()
export class AuthenticationService {
    public token: string;
    public loading = false;
    constructor(private http: Http, private apiConfig: ApiConfiguration) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(u: AuthenticateModel): Observable<boolean> {

        return this.http.post(this.apiConfig.rootUrl + '/api/TokenAuth/Authenticate',
            {
                usernameOrEmailAddress: u.userNameOrEmailAddress,
                password: u.password,
                rememberClient: u.rememberClient
            },
            {
                headers: new Headers({ 'Content-Type': 'application/json' })
            }).map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json().result;
                let token = res.accessToken;
                let enc_auth_token = res.encryptedAccessToken;
                if (token) {
                    // set token property
                    this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: "admin", token: token }));
                    localStorage.setItem('enc_auth_token', enc_auth_token);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    swal(
                        'Đang nhập thất bại, vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu!',
                        '',
                        'error'
                    )
                    return false;
                }
            }).catch((error: any) => {
                return Observable.throw(new Error(error.status));
            });;
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
export class AuthenticateModel {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean | undefined;

    init(data?: any) {
        if (data) {
            this.userNameOrEmailAddress = data["userNameOrEmailAddress"];
            this.password = data["password"];
            this.rememberClient = data["rememberClient"];
        }
    }

    static fromJS(data: any): AuthenticateModel {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticateModel();
        result.init(data);
        return result;
    }
}