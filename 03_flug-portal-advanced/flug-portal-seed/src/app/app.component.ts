import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public info: string = 'Welt';
    public showWaitInfo: boolean = false;

    constructor(private router: Router, private oauthService: OAuthService, private translate: TranslateService) {

        translate.setDefaultLang('de');
        translate.use('de');
        translate.addLangs(['en']);

        router.events.subscribe(
            (event) => {

                if (event instanceof NavigationStart) {
                    this.showWaitInfo = true;
                }
                if (event instanceof NavigationEnd
                    || event instanceof NavigationCancel
                    || event instanceof NavigationError) {
                    this.showWaitInfo = false;
                }

            }
        );

        // The SPA's id. Register SPA with this id at the auth-server
        this.oauthService.clientId = 'spa-demo';

        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin + '/index.html';

        // The name of the auth-server that has to be mentioned within the token
        this.oauthService.issuer = 'https://steyer-identity-server.azurewebsites.net/identity';

        // set the scope for the permissions the client should request
        this.oauthService.scope = 'openid profile email voucher offline_access';

        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;

        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);

        // Verwendeter AuthService erzwingt
        // Client Secret Password Flow :-(
        this.oauthService.dummyClientSecret = 'geheim';

        this.oauthService.loadDiscoveryDocument().then((doc) => {

            // console.debug('discovery', doc);

            // This method just tries to parse the token within the url when
            // the auth-server redirects the user back to the web-app
            // It dosn't initiate the login
            this.oauthService.tryLogin({});

        });


    }

    goHome() {
        this.router.navigate(['/home']);
    }

    activateExpertMode() {
        const queryParams = {
            expertMode: 'true'
        };
        this.router.navigate([], {queryParams});
    }

    deactivateExpertMode() {
        const queryParams = {
            expertMode: 'false'
        };
        this.router.navigate([], {queryParams});
        // , fragment: '123'

    }

}



