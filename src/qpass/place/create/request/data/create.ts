import Data from "./data";

export default class Create implements Data {

    constructor(
       public name : string,
       public abbreviation : string,
       public address : string,
       public business: number,
       public level: number,
       public type : number,

    ) {}
}