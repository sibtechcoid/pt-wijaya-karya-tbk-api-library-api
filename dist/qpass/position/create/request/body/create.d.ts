import BusinessCreate from "../../../../object/business/create/request/business/create";
import Access from "../../../access/access";
import Body from "./body";
import Group from "../../../group/group";
export default class Create extends BusinessCreate implements Body {
    access: Access[];
    group: Group;
    constructor(name: string, abbreviation: string, access: Access[], group: Group);
}
