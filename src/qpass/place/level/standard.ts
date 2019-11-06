import Type from "./type";

export default class Standard<Id extends undefined|number> implements Type<Id> {

    constructor(
       public name : string,
       public abbreviation : string,
       public id : Id,
    ) {}
}