import Level from "./level";
import Standard from "./standard";
import Id from "../../../id/id";

export default class StandardId extends Standard implements Id{

    constructor(
        name : string,
        abbreviation : string,
        public id : number,
    ) {
        super(name, abbreviation);
    }
}