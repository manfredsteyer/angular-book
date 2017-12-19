import { Injectable} from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.debug('route', route);
        console.debug('state', state);

        // this.router.navigate(['/home', {needToLogin:true}]);

        //return Math.random() < 0.5;
        return true;

    }


}