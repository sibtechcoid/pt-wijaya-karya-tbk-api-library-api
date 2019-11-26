import Type from "./type";
export default class Create implements Type {
    id: number;
    created: string;
    updated: string;
    name: string;
    abbreviation: string;
    deactivated: null | string;
    constructor(id: number, created: string, updated: string, name: string, abbreviation: string, deactivated: null | string);
}
