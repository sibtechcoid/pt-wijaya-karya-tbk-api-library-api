import Level from "./level";

export default class Standard<Id extends undefined|number> implements Level<Id> {

    constructor(
       public name : string,
       public abbreviation : string,
       public id : Id,
    ) {}
}