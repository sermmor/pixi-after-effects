import * as PIXI from 'pixi.js';
import { Asset } from './asset';
import { AEDataInterceptor } from './interceptor';
import { DataAE } from './AfterEffects';
import { Element } from './element/element';
/**
 * Create assets and layers, also load all images includes AfterEffects animation.
 *
 * @class AEDataLoader
 * @memberof PIXI
 * @prop {function} imagePathProxy - Callback with image path before load image. If modify image path before load image, override this member and return newly path
 * @prop {function} createImageLoader - Create PIXI.loader.Loader for loading image. If create PIXI.loader.Loader for you want, override this member and can return another loader
 */
export declare class AEDataLoader {
    imagePathProxy: (path: any) => any;
    createImageLoader: (imageAssets: any) => PIXI.Loader;
    constructor();
    /**
     * Load JSON data by url
     *
     * @memberof PIXI.AEDataLoader#
     * @param {string} - The JSON url
     * @return {Promise}
     */
    loadJSON(jsonPath: string): Promise<any>;
    /**
     * Load JSON data by url with PIXI.AEDataInterceptor
     *
     * @memberof PIXI.AEDataLoader#
     * @param {string} - The JSON url
     * @param {PIXI.AEDataInterceptor} - The AEDataInterceptor instance
     * @return {Promise}
     */
    loadJSONWithInterceptor(jsonPath: string, interceptor: AEDataInterceptor): Promise<any>;
    static loadLayers(data: DataAE, interceptor?: AEDataInterceptor): Element[];
    loadAssets(data: DataAE, jsonPath: string, interceptor?: AEDataInterceptor): Promise<Asset[]>;
    loadImages(imageAssets: Asset[]): Promise<any>;
    static resolveReference(layers: Element[], assets: Asset[]): void;
    load(data: DataAE, jsonPath: string, interceptor?: AEDataInterceptor | null): Promise<void>;
}
