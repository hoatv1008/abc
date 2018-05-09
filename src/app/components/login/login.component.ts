import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AuthenticateModel } from '../../services/authentication.service';
import { FormControl } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    error = '';
    user: AuthenticateModel = null;

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
        this.authenticationService.login(this.user)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                }
            });
    }

}
