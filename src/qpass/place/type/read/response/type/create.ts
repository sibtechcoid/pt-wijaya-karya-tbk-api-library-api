import Type from "./type";
import Level from "../level/level";
import LevelTypeCreate from "../../../../level/read/response/type/create";

export default class Create extends LevelTypeCreate implements Type {

    constructor(
        id : number,
        created : Date,
        updated : Date,
        name : string,
        abbreviation : string,
        public levels : null|Level[],
        deactivated : null|Date
    ) {

        super(id, created, updated, name, abbreviation, deactivated);
    }
}