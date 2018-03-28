import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        if (this.route.snapshot.queryParams.code == null) {
            this.authenticationService.authorize();
        }
        else {
            this.login(this.route.snapshot.queryParams.code);
        }
    }

    login(code) {
         this.authenticationService.login(code)
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
