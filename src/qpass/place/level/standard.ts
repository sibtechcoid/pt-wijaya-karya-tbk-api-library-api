import Level from "./level";

export default class Standard implements Level {

    constructor(
       public name : string,
       public abbreviation : string,
    ) {}
}