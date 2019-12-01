import Object from "./object";
export default class Create implements Object {
    name: string;
    abbreviation: string;
    address: string;
    business: number;
    level: number;
    constructor(name: string, abbreviation: string, address: string, business: number, level: number);
}
