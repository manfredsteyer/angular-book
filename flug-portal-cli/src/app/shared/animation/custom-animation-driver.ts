import { AnimationDriver, ɵsupportsWebAnimations, ɵWebAnimationsDriver, ɵNoopAnimationDriver } from '@angular/animations/browser';
import { environment } from 'environments/environment';

export function CustomAnimationDriverFactory() {
    if (environment.animation === true && ɵsupportsWebAnimations()) {
        return new ɵWebAnimationsDriver();
    }
    return new ɵNoopAnimationDriver();
}
