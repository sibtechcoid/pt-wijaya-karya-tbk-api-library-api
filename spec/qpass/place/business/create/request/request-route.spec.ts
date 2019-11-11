import Route from "../../../../../../dist/qpass/place/business/create/route/create";
import Create from "../../../../../../dist/qpass/place/business/create";
import Request from "../../../../../../dist/qpass/place/business/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/place/business/create request', () => {

    RequestRoute((body) => Request(body), Route(), [new Create('name', 'abbreviation')]);
});
