import Place from "./place";

export default class Standard<Id extends undefined|number> implements Place<Id> {

    constructor(
       public name : string,
       public abbreviation : string,
       public address : string,
       public type: number,
       public level: number,
       public id : Id,
    ) {}
}