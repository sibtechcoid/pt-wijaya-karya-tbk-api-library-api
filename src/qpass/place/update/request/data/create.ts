import CreateCreate from "../../../create/request/data/create";
import CreateData from "../../../create/request/data/data";
import Id from "../../../../../id/id";

export default class Create extends CreateCreate implements CreateData, Id {

    constructor(
       public id : number,
       name : string,
       abbreviation : string,
       address : string,
       business: number,
       level: number,
       type : number,
    ) {
        super(name, abbreviation, address, business, level, type)
    }
}