import Object from "./object";

export default class Create implements Object {

    constructor(
       public name : string,
       public abbreviation : string,
       public address : string,
       public type: number,
       public level: number,
    ) {}
}