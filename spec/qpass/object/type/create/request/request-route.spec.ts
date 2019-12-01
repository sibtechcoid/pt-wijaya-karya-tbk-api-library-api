import Route from "../../../../../../dist/qpass/object/type/create/route/create";
import Request from "../../../../../../dist/qpass/object/type/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/type/create request', () => {

    RequestRoute((body) => Request(body), Route(), {name:'name', abbreviation:'abbreviation'});
});
