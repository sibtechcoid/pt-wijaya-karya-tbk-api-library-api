import BusinessCreate from "../../../../../qpass/place/business/create/request/business/create";
import Access from "../access/access";

export default class Create extends BusinessCreate {

    constructor(
        name : string,
        abbreviation : string,
        public access : Access[],
    ) {
        super(name, abbreviation)
    }
}