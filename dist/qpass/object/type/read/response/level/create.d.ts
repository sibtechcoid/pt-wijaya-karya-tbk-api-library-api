import Level from "./level";
export default class Create implements Level {
    id: number;
    created: string;
    updated: string;
    name: string;
    abbreviation: string;
    deactivate: null | string;
    type: null;
    constructor(id: number, created: string, updated: string, name: string, abbreviation: string, deactivate: null | string, type: null);
}
