import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthChildGuard implements CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        // let isProtected = route.data['protected'];
        // if (authService.isLoggedIn || !isProtected) {

        if (this.authService.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/home', {needLogin: true}]);
            return false;
        }

    }

}
