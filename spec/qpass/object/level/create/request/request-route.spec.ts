import Route from "../../../../../../dist/qpass/object/level/create/route/create";
import Create from "../../../../../../dist/qpass/object/level/create/request/level/create";
import Request from "../../../../../../dist/qpass/object/level/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/level/create  request', () => {

    RequestRoute((body) => Request(body), Route(), new Create('name', 'abbreviation', 0));
});
