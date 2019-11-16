import Data from "./data";

export default class Create implements Data {

    constructor(
       public name : string,
       public abbreviation : string,
       public levels : number[],
    ) {}
}