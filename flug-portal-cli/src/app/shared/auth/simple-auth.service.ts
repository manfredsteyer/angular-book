import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class SimpleAuthService implements AuthService {

    private _userName = '';

    public login(loginName): void {
        this._userName = loginName || 'Max';
    }

    loginWithPassword(userName: string, password: string): Promise<any> {
        return Promise.reject('not implemented');
    }


    public logout(): void {
        this._userName = '';
    }

    public get isLoggedIn(): boolean {
        return this._userName !== '';
    }

    public get userName(): string {
        return this._userName;
    }

}
