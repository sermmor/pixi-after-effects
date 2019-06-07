import * as PIXI from 'pixi.js';
import { Element, ElementData, TextPropierties } from './element';
export declare class TextElement extends Element {
    text: PIXI.Text;
    rawText: string;
    fontFamily: string;
    fontColor: number;
    fontSize: number;
    justification: number;
    baseLineHeight: number;
    baseLineShift: any;
    tracking: any;
    constructor(data: ElementData);
    static toHex(c: number): string;
    static toFontColor(data: number[]): number;
    setupText(data: TextPropierties): void;
}
