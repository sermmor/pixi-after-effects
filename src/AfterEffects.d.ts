import * as PIXI from 'pixi.js';
import * as element from './element';
import { Element, ElementData } from './element/element';
import { Asset } from './asset';
export interface DataAE {
    h?: number;
    w?: number;
    op?: number;
    ip?: number;
    layers?: (Element | ElementData)[];
    assets?: (Asset | ElementData)[];
    fr?: number;
    v?: string | number;
}
/**
 * @example
 * // create base container object
 * const stage = new PIXI.Container();
 * // create the AfterEffects instance from json path
 * PIXI.AfterEffects.fromJSONPath('bodymovin.json').then((ae) => {
 *   // add AfterEffects to stage
 *   stage.addChild(ae);
 *   // start AfterEffects animation
 *   ae.play();
 * });
 *
 * @class AfterEffects
 * @extends PIXI.Container
 * @memberof PIXI
 */
export declare class AfterEffects extends PIXI.Container {
    finder: element.ElementFinder;
    inFrame: number;
    outFrame: number;
    frameRate: number;
    version: string | number;
    layers: (Element | ElementData)[] | undefined;
    textures: any[];
    textureCacheIds: any;
    player: element.ElementPlayer;
    deltaPlayer: element.ElementDeltaPlayer;
    masks: {
        maskLayer: Element;
        maskTargetLayer: Element;
    }[];
    noreplay: boolean;
    [key: string]: any;
    constructor();
    /**
     * Create PIXI.AfterEffects instance from JSON url
     *
     * @memberof PIXI.AfterEffects
     * @static
     * @param {string} - The JSON url
     * @param {object} [opt] - The animation option parameters
     * @param {boolean} [opt.noreplay] - enables no repeat mode. if enabled this option, instantly destroy already played component.
     * @return {Promise}
     */
    static fromJSONPath(jsonPath: string, opt: {
        noreplay?: boolean;
        [key: string]: any;
    }): Promise<any>;
    /**
     * Create PIXI.AfterEffects instance from object created by AEDataLoader
     *
     * @memberof PIXI.AfterEffects
     * @static
     * @param {object} - The Object loaded by AEDataLoader
     * @param {object} [opt] - The animation option parameters
     * @param {boolean} [opt.noreplay] - enables no repeat mode. if enabled this option, instantly destroy already played component.
     * @return {PIXI.AfterEffects} The newly created AfterEffects
     */
    static fromData(data: DataAE, opt?: {
        noreplay?: boolean;
        [key: string]: any;
    }): AfterEffects;
    /**
     * @memberof PIXI.AfterEffects#
     * @private
     * @param {object} - The Object loaded by AEDataLoader
     * @param {object} - The option ( `noreplay` ) for AfterEffects
     */
    setup(data: DataAE, opt: {
        noreplay?: boolean;
        [key: string]: any;
    }): void;
    /**
     * Find element by name
     *
     * @memberof PIXI.AfterEffects#
     * @param {string} - The name of element
     * @return {Element} - The found Element
     */
    find(name: string): PIXI.Container[];
    /**
     * Update mask element by frame
     *
     * @private
     * @memberof PIXI.AfterEffects#
     * @param {number} - The current frame number
     */
    updateMask(frame: number): void;
    /**
     * Update by current time
     *
     * @memberof PIXI.AfterEffects#
     * @param {number} - The current time
     */
    update(nowTime: number): void;
    /**
     * Update by delta time
     *
     * @memberof PIXI.AfterEffects#
     * @param {number} - The delta time
     */
    updateByDelta(deltaTime: number): void;
    /**
     * Update by frame
     *
     * @memberof PIXI.AfterEffects#
     * @param {number} - The current frame number
     */
    updateWithFrame(frame: number): void;
    /**
     * Start AfterEffects animation
     *
     * @memberof PIXI.AfterEffects#
     * @param {boolean} - Enable Loop playing
     */
    play(isLoop: boolean): void;
    /**
     * Pause AfterEffects animation
     *
     * @memberof PIXI.AfterEffects#
     */
    pause(): void;
    /**
     * Resume AfterEffects animation
     *
     * @memberof PIXI.AfterEffects#
     */
    resume(): void;
    /**
     * Stop AfterEffects animation
     *
     * @memberof PIXI.AfterEffects#
     */
    stop(): void;
}
