import Place from "./place";
import Type from "./type/type";

export default class Standard implements Place {

    constructor(
       public name : string,
       public abbreviation : string,
       public address : string,
       public type: number,
    ) {}
}