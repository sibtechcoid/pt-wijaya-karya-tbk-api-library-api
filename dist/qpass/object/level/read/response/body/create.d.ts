import Type from "./body";
export default class Create implements Type {
    id: number;
    created: string;
    updated: string;
    name: string;
    abbreviation: string;
    deactivate: null | string;
    constructor(id: number, created: string, updated: string, name: string, abbreviation: string, deactivate: null | string);
}
