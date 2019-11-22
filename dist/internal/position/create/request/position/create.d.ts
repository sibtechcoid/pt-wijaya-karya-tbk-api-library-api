import BusinessCreate from "../../../../../qpass/place/business/create/request/business/create";
import Access from "../access/access";
export default class Create extends BusinessCreate {
    access: Access[];
    constructor(name: string, abbreviation: string, access: Access[]);
}
