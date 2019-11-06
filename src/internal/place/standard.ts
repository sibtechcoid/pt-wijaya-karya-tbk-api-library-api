import Place from "./place";
import Type from "./type/type";

export default class Standard<Id extends undefined|number> implements Place<Id> {

    constructor(
       readonly name : string,
       readonly abbreviation : string,
       readonly address : string,
       readonly type: number,
       readonly id : Id,
    ) {}
}