import Type from "./type";

export default class Standard<Id extends undefined|number> implements Type<Id> {

    constructor(
       readonly name : string,
       readonly identifier : string,
       readonly id : Id,
    ) {}
}