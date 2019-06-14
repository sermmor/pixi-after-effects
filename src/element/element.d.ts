import 'core-js/modules/es7.object.values';
import * as PIXI from 'pixi.js';
import { ElementFinder } from './finder';
import { ElementPlayer } from './player';
import { ElementDeltaPlayer } from './delta_player';
import { Container } from 'pixi.js';
import { MaskElement, MasksProperties } from './mask';
import { PathForShape, GroupElement, GroupItem, ShapeElement } from './shape';
export interface ElementData {
    ao: number;
    w: number;
    h: number;
    nm: string;
    p?: string;
    id?: string;
    refId: string;
    ty: number | string;
    completed: any;
    ind: number;
    parent: number;
    ip: number;
    op: number;
    sr: number;
    st: number;
    hasMask: boolean;
    ks: Transform;
    bm: number;
    bmPIXI: number;
    tt: any;
    td: any;
    masksProperties: any;
    events: {
        [x: string]: Function;
    };
    bounds: {
        t: number;
        b: number;
        l: number;
        r: number;
    };
    image?: PIXI.Sprite;
    shapes?: (GroupItem | GroupElement)[];
    sc?: string | number;
    sw?: number;
    sh?: number;
    text?: PIXI.Text;
    rawText?: string;
    t?: {
        d: {
            k: {
                s: TextPropierties;
            }[];
        };
    };
    imagePath?: string;
    texture?: any;
    isDisused?: boolean;
    layers?: ElementData[];
    u?: string;
}
export interface TextPropierties {
    f: string;
    fc: number[];
    s: number;
    t: string;
    lh: number;
    ls: any;
    tr: any;
    j: number;
}
export interface Transform {
    mn?: string;
    nm?: string;
    ty?: string;
    a: MultiDimensional | MultiDimensionalKeyframed;
    p: MultiDimensional | MultiDimensionalKeyframed;
    s: MultiDimensional | MultiDimensionalKeyframed;
    r: Value | ValueKeyframed;
    o: Value | ValueKeyframed;
    px: Value | ValueKeyframed;
    py: Value | ValueKeyframed;
    pz: Value | ValueKeyframed;
    sk: Value | ValueKeyframed;
    sa: Value | ValueKeyframed;
}
export interface MultiDimensional {
    a: number;
    k: number[];
    x: string | {
        k: number | number[] | ValueKeyframe[];
    };
    y: string | {
        k: number | number[] | ValueKeyframe[];
    };
    ix: string;
}
export interface OffsetKeyframe {
    n: string[];
    s: number[];
    e: number | number[];
    t: number;
    i: {
        x: number | number[];
        y: number | number[];
    };
    o: {
        x: number | number[];
        y: number | number[];
    };
}
export interface MultiDimensionalKeyframed {
    k: OffsetKeyframe[];
    x: string | {
        k: number | number[] | ValueKeyframe[];
    };
    y: string | {
        k: number | number[] | ValueKeyframe[];
    };
    ix: string;
    ti: number[];
    to: number[];
}
export interface ValueKeyframed {
    a: number;
    k: ValueKeyframe[] | number;
    x: string;
    ix: string;
}
export interface ValueKeyframe {
    n: string[];
    s: number | number[];
    e: number | number[];
    t: number;
    i: {
        x: number | number[];
        y: number | number[];
    };
    o: {
        x: number | number[];
        y: number | number[];
    };
}
export interface Value {
    a: number;
    k: number;
    x: string;
    ix: string;
}
export interface AnimatedData {
    name: string[];
    startFrame: number;
    endFrame: number;
    easing: (x: number) => number;
    fromPosition?: number | number[] | undefined;
    toPosition?: number | number[] | undefined;
    toPos?: PIXI.Point | undefined;
    fromAnchorPoint?: number | number[] | undefined;
    toAnchorPoint?: number | number[] | undefined;
    fromOpacity?: number | number[] | undefined;
    toOpacity?: number | number[] | undefined;
    fromRotation?: number | number[] | undefined;
    toRotation?: number | number[] | undefined;
    fromScale?: number | number[] | undefined;
    toScale?: number | number[] | undefined;
    fromPath?: PathForShape | null;
    toPath?: PathForShape | null;
    fromRatio?: number | null;
    toRatio?: number | null;
    fromColor?: string;
    toColor?: string;
}
export declare type AnimationPoint = {
    x: AnimatedData[];
    y: AnimatedData[];
};
export declare class Element extends PIXI.Graphics {
    maskLayer: MaskElement;
    finder: ElementFinder;
    referenceId: string;
    type: string | number;
    isCompleted: boolean;
    index: number;
    hasParent: PIXI.DisplayObject;
    parentIndex: number;
    inFrame: number;
    outFrame: number;
    stretch: number;
    startTime: number;
    hasMask: boolean;
    hasTrackMatteType: boolean;
    trackMatteType: any;
    isTrackMatteData: boolean;
    player: ElementPlayer;
    deltaPlayer: ElementDeltaPlayer;
    masksProperties: MasksProperties[];
    isInvertedMask: boolean;
    interactiveEventMap: {
        [key: string]: boolean;
    };
    hasAnimatedAnchorPoint: boolean;
    animatedAnchorPoints: AnimatedData[];
    hasAnimatedOpacity: boolean;
    animatedOpacities: AnimatedData[];
    hasAnimatedPosition: boolean;
    animatedPositions: AnimatedData[] | AnimationPoint;
    hasAnimatedSeparatedPosition: boolean;
    hasAnimatedRotation: boolean;
    animatedRotations: AnimatedData[];
    hasAnimatedScale: boolean;
    animatedScales: AnimatedData[];
    scaleX: any;
    scaleY: any;
    shapes: ShapeElement[];
    [key: string]: any;
    constructor(data?: ElementData);
    static toPIXIBlendMode(mode: number): PIXI.BLEND_MODES;
    __root(node: Container): Container | null;
    root(): Container | null;
    addChild(child: PIXI.Container): PIXI.DisplayObject;
    isInvertTrackMatteType(): boolean;
    frameRate: number;
    opt: Element;
    isInteractiveEvent(eventName: string): boolean;
    find(name: string): PIXI.Container[];
    isCompType(): boolean;
    isImageType(): boolean;
    setupProperties(data: Transform): void;
    updateAnimationFrameByBaseFrame(animBaseFrame: number): void;
    setupAnchorPoint(data: MultiDimensional | MultiDimensionalKeyframed): void;
    static createAnchorPoint(data: MultiDimensional | MultiDimensionalKeyframed): PIXI.Point | AnimatedData[];
    static createAnchorPointEasing(animData: OffsetKeyframe): ((x: number) => number);
    static createAnimatedAnchorPoint(data: (number | OffsetKeyframe)[]): AnimatedData[];
    setupOpacity(data: Value | ValueKeyframed): void;
    static createOpacity(data: Value | ValueKeyframed): number | AnimatedData[];
    static createOpacityEasing(animData: ValueKeyframe): ((x: number) => number);
    static createAnimatedOpacity(data: ValueKeyframe[]): AnimatedData[];
    setupPosition(data: MultiDimensional | MultiDimensionalKeyframed): void;
    static createPosition(data: MultiDimensional | MultiDimensionalKeyframed): PIXI.Point | AnimationPoint | AnimatedData[];
    static createSeparatedPositionEasing(animData: ValueKeyframe): ((x: number) => number);
    static createAnimatedSeparatedPosition(data: ValueKeyframe[]): AnimatedData[];
    static createPositionEasing(animData: ValueKeyframe): ((x: number) => number);
    static createAnimatedPosition(data: ValueKeyframe[]): AnimatedData[];
    setupRotation(data: Value | ValueKeyframed): void;
    static createRotation(data: Value | ValueKeyframed): number | AnimatedData[];
    static createRotationEasing(animData: ValueKeyframe): ((x: number) => number);
    static createAnimatedRotation(data: ValueKeyframe[]): AnimatedData[];
    setupScale(data: MultiDimensional | MultiDimensionalKeyframed): void;
    static createScale(data: MultiDimensional | MultiDimensionalKeyframed): PIXI.Point | AnimatedData[];
    static createScaleEasing(animData: OffsetKeyframe): ((x: number) => number);
    static createAnimatedScale(data: OffsetKeyframe[]): AnimatedData[];
    animateAnchorPoint(frame: number): boolean;
    animateOpacity(frame: number): boolean;
    animatePosition(frame: number): boolean;
    animateSeparatedPosition(frame: number): boolean;
    animateRotation(frame: number): boolean;
    animateScale(frame: number): boolean;
    hasAnimateProperty(): boolean;
    update(nowTime: number): void;
    updateByDelta(deltaTime: number): void;
    updateWithFrameBySelfPlayer(frame: number): void;
    updateWithFrame(frame: number): void;
    __updateWithFrame(frame: number): boolean;
    play(isLoop: boolean): void;
    pause(): void;
    resume(): void;
    stop(): void;
}
