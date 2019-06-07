/**
 * @namespace PIXI
 */
import { AfterEffects as AE } from './AfterEffects';
import { AEDataLoader as AELoader } from './loader';
import { AEDataInterceptor as AEInterceptor } from './interceptor';
export declare namespace PIXI {
    class AfterEffects extends AE {
    }
    class AEDataLoader extends AELoader {
    }
    class AEDataInterceptor extends AEInterceptor {
    }
}
export * from './AfterEffects';
export * from './loader';
export * from './interceptor';
