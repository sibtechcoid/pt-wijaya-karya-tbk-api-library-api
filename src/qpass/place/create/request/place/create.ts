import Place from "./place";

export default class Create implements Place {

    constructor(
       public name : string,
       public abbreviation : string,
       public address : string,
       public business: number,
       public level: number,
       public type : number,

    ) {}
}