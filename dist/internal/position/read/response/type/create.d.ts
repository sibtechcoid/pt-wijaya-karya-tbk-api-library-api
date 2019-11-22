import Type from "./type";
import LevelTypeCreate from "../../../../../qpass/place/level/read/response/type/create";
import Access from "../../../../position/create/request/access/access";
export default class Create extends LevelTypeCreate implements Type {
    access: Access[];
    constructor(id: number, created: string, updated: string, name: string, abbreviation: string, access: Access[], deactivated: null | string);
}
