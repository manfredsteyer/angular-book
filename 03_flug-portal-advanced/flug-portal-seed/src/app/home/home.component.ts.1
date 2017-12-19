import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    needLogin: boolean;

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

    logout() {
        this.authService.logout();
    }

    get userName() {
        return this.authService.userName;
    }
}
