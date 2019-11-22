import BusinessCreate from "../../../../../qpass/place/business/create/request/business/create";
import Access from "../access/access";
import Position from "./position";
import Group from "../group/group";
export default class Create extends BusinessCreate implements Position {
    access: Access[];
    group: Group;
    constructor(name: string, abbreviation: string, access: Access[], group: Group);
}
