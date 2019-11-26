import Object from "./object";

export default class Create implements Object {

    constructor(
       public name : string,
       public abbreviation : string,
       public address : string,
       public business: number,
       public level: number,
     //  public type : number,

    ) {}
}