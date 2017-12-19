import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AdvancedAuthService implements AuthService {

    constructor(private oauthService: OAuthService) {
    }

    public login(): void {
        this.oauthService.clientId = 'spa-demo';

        this.oauthService.initImplicitFlow();
    }

    loginWithPassword(userName: string, password: string): Promise<any> {
        this.oauthService.clientId = 'demo-resource-owner';

        return this
                .oauthService
                .fetchTokenUsingPasswordFlowAndLoadUserProfile(userName, password);
    }

    public logout(): void {
        this.oauthService.logOut();
    }

    public get isLoggedIn(): boolean {
        return this.oauthService.hasValidAccessToken();
    }

    public get userName(): string {
        const claims = this.oauthService.getIdentityClaims();
        if (!claims) {
            return null;
        }
        return claims.given_name;
    }

}
