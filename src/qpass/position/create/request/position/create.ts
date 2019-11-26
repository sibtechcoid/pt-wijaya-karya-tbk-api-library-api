import BusinessCreate from "../../../../object/business/create/request/business/create";
import Access from "../access/access";
import Position from "./position";
import Group from "../group/group";

export default class Create extends BusinessCreate implements Position {

    constructor(
        name : string,
        abbreviation : string,
        public access : Access[],
        public group : Group,
    ) {
        super(name, abbreviation)
    }
}