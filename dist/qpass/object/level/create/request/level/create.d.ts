import Level from "./level";
export default class Create implements Level {
    name: string;
    abbreviation: string;
    type: number;
    constructor(name: string, abbreviation: string, type: number);
}
