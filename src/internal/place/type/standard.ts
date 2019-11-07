import Type from "./type";

export default class Standard implements Type {

    constructor(
       public name : string,
       public abbreviation : string,
    ) {}
}