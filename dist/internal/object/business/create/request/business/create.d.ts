import Business from "./business";
export default class Create implements Business {
    name: string;
    abbreviation: string;
    constructor(name: string, abbreviation: string);
}
