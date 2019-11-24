import Type from "./type";
import LevelTypeCreate from "../../../../../qpass/place/level/read/response/type/create";
import Access from "../../../../access/update/request/access/access";

export default class Create extends LevelTypeCreate implements Type {

    constructor(
        id : number,
        created : string,
        updated : string,
        name : string,
        abbreviation : string,
        public access : Access,
        deactivated : null|string
    ) {

        super(id, created, updated, name, abbreviation, deactivated);
    }
}