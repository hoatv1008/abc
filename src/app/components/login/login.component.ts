import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AuthenticateModel } from '../../services/authentication.service';
import { FormControl } from '@angular/forms';
import swal, { SweetAlertOptions } from 'sweetalert2';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    error = '';
    user: AuthenticateModel = null;
    public loading = false;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.user = new AuthenticateModel();
        this.user.userNameOrEmailAddress = '';
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.user)
            .subscribe(result => {
                this.loading = false;
                if (result === true) {
                    // login successful
                    this.router.navigate(['/']);
                } else {
                    // login failed
                    // return false to indicate failed login
                    swal(
                        'Đang nhập thất bại, vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu!',
                        '',
                        'error'
                    )
                }
            }, (err) => {
                this.loading = false;
                // return false to indicate failed login
                swal(
                    'Đang nhập thất bại, vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu!',
                    '',
                    'error'
                )
            });
    }

}
