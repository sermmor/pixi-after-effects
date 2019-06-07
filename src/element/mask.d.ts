import { ShapeElement, ShapeProp, PropsShapeKeyframed, PathForShape } from './shape';
import { Element, Value, ValueKeyframed } from './element';
export interface MasksProperties {
    cl: boolean;
    inv: boolean;
    pt: {
        k: ShapeProp | PropsShapeKeyframed[];
    };
    mode: string;
    o: Value | ValueKeyframed;
}
export declare class MaskElement extends ShapeElement {
    maskShapePaths: PathForShape[];
    isMaskLayer: boolean;
    maskTargetLayer: Element;
    maskMode: number;
    screenWidth: number;
    screenHeight: number;
    constructor(maskTargetLayer: Element);
    setBlendModeByMaskMode(mode: number): void;
    static toMaskMode(mode: string): number;
    updateAnimationFrameByBaseFrame(animBaseFrame: number): void;
    drawMask(frame: number, shapePath: PathForShape): boolean;
    setupScreenSize(): void;
    drawAllMask(frame: number): boolean;
    __updateWithFrame(frame: number): boolean;
}
