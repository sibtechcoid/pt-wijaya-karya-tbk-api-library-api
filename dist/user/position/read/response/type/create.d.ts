import Type from "./type";
import LevelTypeCreate from "../../../../../qpass/place/level/read/response/type/create";
import Access from "../../../../access/update/request/access/access";
export default class Create extends LevelTypeCreate implements Type {
    access: null | Access;
    constructor(id: number, created: string, updated: string, name: string, abbreviation: string, access: null | Access, deactivated: null | string);
}
