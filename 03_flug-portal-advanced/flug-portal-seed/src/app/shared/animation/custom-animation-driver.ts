import { AnimationDriver, ɵsupportsWebAnimations, ɵWebAnimationsDriver, ɵNoopAnimationDriver } from '@angular/animations/browser';

export function CustomAnimationDriverFactory() {
    if (ENV !== 'no-animation' && ɵsupportsWebAnimations()) {
        return new ɵWebAnimationsDriver();
    }
    return new ɵNoopAnimationDriver();
}
