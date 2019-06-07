import { Element, ElementData } from './element';
import { MaskElement } from './mask';
import { Asset } from '../asset';
export declare enum Mode {
    a = 0,
    s = 1,
    i = 2,
    l = 3,
    d = 4,
    f = 5,
    n = 6
}
export interface Mask extends Element {
    inv?: boolean;
    nm?: string;
    pt?: Shape | ShapeKeyFramed;
    o?: Value | ValueKeyFramed;
    mode?: Mode;
    maskTargetLayer?: Element;
}
export interface ValueKeyFramed {
    s: number;
    t: number;
    i: {
        x: number[];
        y: number[];
    };
}
export interface Value {
    k: number;
    x: string;
    ix: string;
}
export interface ShapeKeyFramed {
    k: ShapePropKeyframe[];
    x: string;
    ix: string;
    ti: number[];
    to: number[];
}
export interface ShapePropKeyframe {
    s: ShapeProp[];
    t: number;
    i: {
        x: number[];
        y: number[];
    };
    o: {
        x: number[];
        y: number[];
    };
}
export interface Shape {
    k: ShapeProp;
    x: string;
    ix: string;
    a: number;
}
export interface ShapeProp {
    c: boolean;
    i: number[];
    o: number[];
    v: number[];
}
export declare class CompElement extends Element {
    originWidth: number;
    originHeight: number;
    clonedLayers: Element[];
    autoOriented: number;
    masks: Mask[];
    layers: Element[];
    noreplay: boolean;
    constructor(data: ElementData);
    allLayers(): Element[];
    frameRate: number;
    opt: Element;
    createMask(layer: Element, maskLayer: MaskElement): Mask;
    addMaskLayer(layer: Element): void;
    setupTrackMatteLayer(layer: Element, trackMatteLayer: MaskElement): void;
    setupReference(assetMap: {
        [key: string]: Asset;
    }): void;
    createParentLayer(layer: Element, asset: Asset): Element | null;
    resolveLayerReference(layers: Element[], assetMap: {
        [key: string]: Asset;
    }, asset: Asset): void;
    updateMask(frame: number): void;
    updateNotLayers(frame: number): void;
    updateLayers(frame: number): void;
    updateClonedLayers(frame: number): void;
    __updateWithFrame(frame: number): boolean;
}
