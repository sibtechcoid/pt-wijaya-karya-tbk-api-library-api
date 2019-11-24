import Type from "./type";

export default class Create implements Type{

    constructor(
       public name : string,
       public abbreviation : string,
    ) {}
}