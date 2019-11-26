import Data from "./level";
export default class Create implements Data {
    id: number;
    created: string;
    updated: string;
    name: string;
    abbreviation: string;
    deactivated: null | string;
    type: null;
    constructor(id: number, created: string, updated: string, name: string, abbreviation: string, deactivated: null | string, type: null);
}
