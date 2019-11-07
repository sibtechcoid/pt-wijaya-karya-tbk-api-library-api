import Place from "./place";
import Type from "./type/type";
import Standard from "./standard";
import Id from "../../id/id";

export default class StandardId extends Standard implements Id {

    constructor(
        name : string,
        abbreviation : string,
        address : string,
        type: number,
        public id : number,
    ) {
        super(name, abbreviation, address, type);
    }
}