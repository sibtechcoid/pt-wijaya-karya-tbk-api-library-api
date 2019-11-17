import Type from "./type";
import BusinessCreate from "../../../../business/create/request/business/create";

export default class Createz extends BusinessCreate {

    constructor(
        name : string,
        abbreviation : string,
        public levels : number[],
    ) {
        super(name, abbreviation)
    }
}