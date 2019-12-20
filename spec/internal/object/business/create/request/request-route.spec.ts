import Route from "../../../../../../dist/qpass/object/business/create/route/create";
import Request from "../../../../../../dist/qpass/object/business/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/business/create request', () => {

    RequestRoute(Request, Route(),{type:0, name:'name', abbreviation:'abbreviation'});
});
