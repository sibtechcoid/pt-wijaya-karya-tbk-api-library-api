import Level from "./level";

export default class Create implements Level {

    constructor(
       public name : string,
       public abbreviation : string,
    ) {}
}