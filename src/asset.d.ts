import { Element, ElementData } from './element/element';
import { AEDataLoader as Loader } from './loader';
/**
 * @class Asset
 */
export declare class Asset {
    id: string | undefined;
    layers: ElementData[];
    texture: any;
    imagePath: string;
    blendMode: number;
    constructor(loader: Loader, data: ElementData, jsonPath: string);
    /**
     * Create All Elements
     *
     * @memberof Asset#
     * @return {Array} - The Element collection
     */
    createLayers(): (Element | null)[];
    /**
     * Create Element collection
     *
     * @memberof Asset#
     * @param {number}   - The index of layer
     * @return {Element} - The newly Element instance
     */
    createLayerByIndex(index: number): Element | null;
}
