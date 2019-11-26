import Type from "./type";
import Level from "../level/level";
import LevelTypeCreate from "../../../../level/read/response/type/create";
export default class Create extends LevelTypeCreate implements Type {
    levels: null | Level[];
    constructor(id: number, created: string, updated: string, name: string, abbreviation: string, levels: null | Level[], deactivated: null | string);
}
