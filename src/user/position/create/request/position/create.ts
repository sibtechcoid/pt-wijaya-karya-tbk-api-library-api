import BusinessCreate from "../../../../../qpass/place/business/create/request/business/create";

export default class Create extends BusinessCreate {

    constructor(
        name : string,
        abbreviation : string,
        //public levels : number[],
    ) {
        super(name, abbreviation)
    }
}