import Place from "./place";
export default class Create implements Place {
    name: string;
    abbreviation: string;
    address: string;
    type: number;
    level: number;
    constructor(name: string, abbreviation: string, address: string, type: number, level: number);
}
