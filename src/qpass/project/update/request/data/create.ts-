import CreateCreate from "../../../create/request/place/create";
import CreateData from "../../../create/request/place/place";
import Id from "../../../../../id/id";

export default class Create extends CreateCreate implements CreateData, Id {

    constructor(
       public id : number,
       name : string,
       abbreviation : string,
       address : string,
       level: number,
       type : number,
    ) {
        super(name, abbreviation, address, level, type)
    }
}