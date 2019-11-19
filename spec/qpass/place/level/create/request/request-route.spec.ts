import Route from "../../../../../../dist/qpass/place/level/create/route/create";
import Create from "../../../../../../dist/qpass/place/level/create";
import Request from "../../../../../../dist/qpass/place/level/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/place/level/create  request', () => {

    RequestRoute((body) => Request(body), Route(), new Create('name', 'abbreviation'));
});
