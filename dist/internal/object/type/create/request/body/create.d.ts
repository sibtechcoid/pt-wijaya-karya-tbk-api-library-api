import Type from "./body";
export default class Create implements Type {
    name: string;
    abbreviation: string;
    constructor(name: string, abbreviation: string);
}
