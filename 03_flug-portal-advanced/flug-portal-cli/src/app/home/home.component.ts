import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    needLogin: boolean;

    userName: string;
    password: string;
    loginFailed: boolean = false;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.route.params.subscribe((p) => {
            this.needLogin = (p['needLogin'] === 'true');
        });


    }

    login() {
        this.authService.login();
        this.needLogin = false;
    }

    loginWithPassword() {
        this
            .authService
            .loginWithPassword(this.userName, this.password)
            .then(() => console.log('login was successful!'))
            .catch((err) => console.warn('login was not successful!', err));
    }

    logout() {
        this.authService.logout();
    }

    get givenName() {
        return this.authService.userName;
    }
}
