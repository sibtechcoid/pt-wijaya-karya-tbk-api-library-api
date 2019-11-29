import Position from "./position";
import Access from "../../../access/access";
import PositionCreate from "../../../create/request/body/create";
import Group from "../../../group/group";
export default class Create extends PositionCreate implements Position {
    id: number;
    constructor(id: number, name: string, abbreviation: string, access: Access[], group: Group);
}
