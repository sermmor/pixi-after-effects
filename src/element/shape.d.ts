import * as PIXI from 'pixi.js';
import { Element, ElementData, Transform, AnimatedData, MultiDimensional, MultiDimensionalKeyframed, Value, ValueKeyframed, ValueKeyframe, AnimationPoint, OffsetKeyframe } from './element';
export declare enum LineCap {
    round = 2,
    butt = 1,
    square = 3
}
export declare enum LineJoin {
    round = 2,
    miter = 1,
    bevel = 3
}
export interface GroupElement {
    closed: boolean;
    nm: string;
    mn: string;
    ty: string;
    np: number;
    it: GroupItem[];
}
export declare type GroupItem = PathItem | StrokeItem | TrimItem | RectangleItem | EllipseItem | Transform;
export declare type ShapeItem = RectangleForShape | EllipseForShape;
export interface PathItem {
    m: any;
    e: any;
    nm: string;
    mn: string;
    d: number;
    ty: string;
    closed: boolean;
    ks: PropertiesShape | PropsShapeKeyframed;
}
export interface StrokeItem {
    mn: string;
    nm: string;
    ty: string;
    lc: LineCap;
    lj: LineJoin;
    ml: number;
    o: Value | ValueKeyframed;
    w: Value | ValueKeyframed;
    c: MultiDimensional | MultiDimensionalKeyframed;
    fillEnabled: boolean;
}
export interface TrimItem {
    m: any;
    o: Value | ValueKeyframed;
    nm: string;
    mn: string;
    ty: string;
    s: Value | ValueKeyframed;
    e: Value | ValueKeyframed;
}
export interface RectangleItem {
    mn: string;
    nm: string;
    ty: string;
    d: number;
    p: MultiDimensional | MultiDimensionalKeyframed;
    s: MultiDimensional | MultiDimensionalKeyframed;
    r: Value | ValueKeyframed;
}
export interface EllipseItem {
    mn: string;
    nm: string;
    d: number;
    ty: string;
    p: MultiDimensional | MultiDimensionalKeyframed;
    s: MultiDimensional | MultiDimensionalKeyframed;
}
export interface FillItem {
    mn: string;
    nm: string;
    ty: string;
    o: Value | ValueKeyframed;
    c: MultiDimensional | MultiDimensionalKeyframed;
}
export interface PropsShapeKeyframed {
    n: string[];
    s: (ShapeProp | PropsShapeKeyframed[])[];
    e: (ShapeProp | PropsShapeKeyframed[])[];
    t: number;
    i: {
        x: number;
        y: number;
    };
    o: {
        x: number;
        y: number;
    };
}
export interface PropertiesShape {
    k: ShapeProp | PropsShapeKeyframed[];
    x: string;
    ix: string;
    a: number;
}
export interface ShapeProp {
    c: boolean;
    i: number[][];
    o: number[][];
    v: number[][];
}
export interface ShapePath {
    isClosed: boolean;
    name: string;
    path: PathForShape;
}
export interface PathForShape {
    moveTo?: PIXI.Point;
    bezierCurveToPaths?: {
        cp: PIXI.Point;
        cp2: PIXI.Point;
        to: PIXI.Point;
    }[];
    hasAnimatedPath?: boolean;
    paths?: AnimatedData[];
    isClosed?: boolean;
}
export interface StrokeForShape {
    miterLimit: number;
    opacity: number | Value | ValueKeyframed | ValueKeyframe[];
    width: number | ValueKeyframe[];
    color: string | AnimatedData[];
    enabledFill: boolean;
    lineJoin: number;
    lineCap: number;
}
export interface TrimForShape {
    m: any;
    o: Value | ValueKeyframed;
    name: string;
    start: number | AnimatedData[];
    end: number | AnimatedData[];
    enabledAnimation?: boolean;
}
export interface RectangleForShape {
    name: string;
    direction: number;
    position: AnimatedData[] | PIXI.Point | AnimationPoint;
    size: AnimatedData[] | PIXI.Point | AnimationPoint;
    enabledAnimation?: boolean;
}
export interface EllipseForShape {
    direction: number;
    position: AnimatedData[] | PIXI.Point | AnimationPoint;
    size: AnimatedData[] | PIXI.Point | AnimationPoint;
    enabledAnimation?: boolean;
}
export interface FillForShape {
    name?: string;
    opacity?: number | AnimatedData[];
    color?: string | AnimatedData[];
    enabled: boolean;
}
export declare class ShapeElement extends Element {
    shapePaths: ShapePath[];
    stroke: StrokeForShape;
    trim: TrimForShape;
    rects: RectangleForShape[];
    ellipses: EllipseForShape[];
    fillRGBA: FillForShape;
    strokeColorHex: string | undefined;
    fillColorHex: string | undefined;
    isClosed: boolean;
    paths: AnimatedData[];
    constructor(data?: GroupItem | GroupElement, inFrame?: number, outFrame?: number, startTime?: number);
    setupShapeByType(data: GroupItem): void;
    setupShapeIteration(data: (GroupItem)[]): void;
    setupPath(data: PathItem): void;
    setupStroke(data: StrokeItem): void;
    setupTrim(data: TrimItem): void;
    static createTrim(data: number | ValueKeyframe[]): number | AnimatedData[];
    static createTrimEasing(animData: ValueKeyframe): ((x: number) => number);
    static createTrimAnimation(data: ValueKeyframe[]): AnimatedData[];
    setupRect(data: RectangleItem): void;
    setupEllipse(data: EllipseItem): void;
    static createSize(data: MultiDimensional | MultiDimensionalKeyframed): PIXI.Point | AnimationPoint | AnimatedData[];
    static createColor(data: MultiDimensional | MultiDimensionalKeyframed): string | AnimatedData[];
    static createColorEasing(animData: OffsetKeyframe): ((x: number) => number);
    static createAnimatedColor(data: OffsetKeyframe[]): AnimatedData[];
    static createPathEasing(animData: PropsShapeKeyframed): ((x: number) => number);
    createPathByAnimation(data: PropsShapeKeyframed[]): PathForShape;
    createPath(data: ShapeProp | PropsShapeKeyframed[]): PathForShape;
    setupFill(data: FillItem): void;
    static rgbArrayToHex(arr: number[]): string;
    static rgbToHex(r: number, g: number, b: number): string;
    static toHex(c: number): string;
    updateAnimationFrameByBaseFrame(animBaseFrame: number): void;
    drawPathForMask(shapePath: PathForShape): void;
    beforeDraw(): void;
    afterDraw(): void;
    drawPath(shapePath: PathForShape): void;
    static createAnimatePos(animData: AnimatedData, frame: number, fromPos: {
        x: number;
        y: number;
    }, toPos: {
        x: number;
        y: number;
    }): PIXI.Point;
    static createAnimatePath(animData: AnimatedData, frame: number): PathForShape;
    setupStrokeColor(frame: number): void;
    setupFillColor(frame: number): void;
    static createShapePosition(frame: number, shape: ShapeItem): AnimatedData[] | AnimationPoint | PIXI.Point | null | undefined;
    static createShapeSize(frame: number, shape: ShapeItem): PIXI.Point | AnimatedData[] | AnimationPoint | null | undefined;
    drawEllipseAnimation(frame: number, ellipse: EllipseForShape): void;
    drawRectAnimation(frame: number, rect: RectangleForShape): void;
    drawTrim(frame: number): boolean | undefined;
    drawShapePath(frame: number, shapePath: ShapePath, index: number): boolean | undefined;
    drawShapePaths(frame: number): void;
    drawThis(frame: number): void;
    __updateWithFrame(frame: number): boolean;
}
export interface ShapeBounds {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export declare class ShapeContainerElement extends Element {
    shapes: ShapeElement[];
    bounds: ShapeBounds;
    noreplay: boolean;
    constructor(data: ElementData);
    destroy(opt?: {
        children?: boolean;
        texture?: boolean;
        baseTexture?: boolean;
    }): void;
    frameRate: number;
    opt: Element;
    updateAnimationFrameByBaseFrame(animBaseFrame: number): void;
    setupBounds(data: {
        t: number;
        b: number;
        l: number;
        r: number;
    }): void;
    __updateWithFrame(frame: number): boolean;
}
