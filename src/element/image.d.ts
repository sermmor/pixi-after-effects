import * as PIXI from 'pixi.js';
import { Element, ElementData } from './element';
import { Asset } from '../asset';
export declare class ImageElement extends Element {
    image: PIXI.Sprite;
    constructor(data?: ElementData);
    setupImage(assetMap: {
        [key: string]: Asset;
    }): void;
}
