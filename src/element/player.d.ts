export declare class ElementPlayer {
    frameRate: number;
    inFrame: number;
    outFrame: number;
    isLoop: boolean;
    isCompleted: boolean;
    updater: (frame: number) => any;
    completed: () => any;
    isPlaying: any;
    firstTime: any;
    nowTime: any;
    constructor(frameRate: number, inFrame: number, outFrame: number, updater: ((frame: number) => any), completed: (() => any));
    showFirstFrame(): void;
    update(nowTime: number): void;
    play(isLoop: boolean): void;
    pause(): void;
    resume(): void;
    stop(): void;
}
