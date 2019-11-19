import Route from "../../../../../../dist/qpass/place/type/create/route/create";
import Create from "../../../../../../dist/qpass/place/type/create";
import Request from "../../../../../../dist/qpass/place/type/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/place/type/create request', () => {

    RequestRoute((body) => Request(body), Route(), new Create('name', 'abbreviation'));
});
