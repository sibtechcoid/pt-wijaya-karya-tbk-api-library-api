import Place from "./place";
import Standard from "./standard";
import Id from "../../id/id";

export default class StandardId extends Standard implements Id {

    constructor(
        name : string,
        abbreviation : string,
        address : string,
        type: number,
        level: number,
       public id: number,
    ) {
        super(name, abbreviation, address, type, level);
    }
}