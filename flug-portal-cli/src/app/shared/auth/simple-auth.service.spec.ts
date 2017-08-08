import { SimpleAuthService } from './simple-auth.service';

describe('SimpleAuthService', () => {

    let simpleAuthService: SimpleAuthService;

    beforeEach(() => {
        simpleAuthService = new SimpleAuthService();
    });

    it('should login and logout correctly', () => {
        simpleAuthService.login('Max');
        expect(simpleAuthService.isLoggedIn).toBe(true);
        simpleAuthService.logout();
        expect(simpleAuthService.isLoggedIn).toBe(false);
    });

    it('should set user name to Max after login', () => {
        simpleAuthService.login('Max');
        expect(simpleAuthService.userName).toEqual('Max');
    });

});
