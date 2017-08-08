import { TestBed, inject } from '@angular/core/testing';

import { SimpleAuthService } from './simple-auth.service';

describe('SimpleAuthService with Angular Testing Utilities', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{provide: SimpleAuthService, useClass: SimpleAuthService}]
        });
    });

    it('should login and logout correctly',
        inject([SimpleAuthService], (simpleAuthService: SimpleAuthService) => {

            simpleAuthService.login('Max');
            expect(simpleAuthService.isLoggedIn).toBe(true);
            simpleAuthService.logout();
            expect(simpleAuthService.isLoggedIn).toBe(false);

        }));

    it('should set user name to Max after login',
        inject([SimpleAuthService], (simpleAuthService: SimpleAuthService) => {

            simpleAuthService.login('Max');
            expect(simpleAuthService.userName).toEqual('Max');

        }));

});
