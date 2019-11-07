import Place from "./place";

export default class Standard implements Place {

    constructor(
       public name : string,
       public abbreviation : string,
       public address : string,
       public type: number,
       public level: number,
    ) {}
}