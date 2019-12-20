import Route from "../../../../../../dist/qpass/object/level/create/route/create";
import Request from "../../../../../../dist/qpass/object/level/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/level/create  request', () => {

    RequestRoute((body) => Request(body), Route(), {name:'name', abbreviation:'abbreviation', type:0});
});
