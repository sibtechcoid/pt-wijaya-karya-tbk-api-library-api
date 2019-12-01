import Business from "./business";
export default class Create implements Business {
    id: number;
    created: string;
    updated: string;
    name: string;
    abbreviation: string;
    deactivate: null | string;
    constructor(id: number, created: string, updated: string, name: string, abbreviation: string, deactivate: null | string);
}
