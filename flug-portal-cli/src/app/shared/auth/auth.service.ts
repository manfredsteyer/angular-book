import { Injectable } from '@angular/core';

@Injectable()
export abstract class AuthService {

    public abstract login(loginName?): void;

    public abstract loginWithPassword(userName: string, password: string): Promise<any>;

    public abstract logout(): void;

    public abstract  get isLoggedIn();

    public abstract  get userName(): string;

}
