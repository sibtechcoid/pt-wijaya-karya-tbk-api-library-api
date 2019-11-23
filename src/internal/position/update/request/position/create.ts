import Position from "./position";
import Access from "../../../../position/create/request/access/access";
import PositionCreate from "../../../../position/create/request/position/create";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Group from "../../../create/request/group/group";

export default class Create extends PositionCreate implements Position {

    constructor(
        public id : number,
        name : string,
        abbreviation : string,
        access : Access[],
        group : Group,
    ) {

        super(name, abbreviation, access, group);

    }
}