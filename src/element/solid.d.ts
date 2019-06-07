import { Element, ElementData } from './element';
export declare class SolidElement extends Element {
    color: string | number;
    sw: number;
    sh: number;
    opacity: number;
    constructor(data: ElementData);
    __updateWithFrame(frame: number): boolean;
}
