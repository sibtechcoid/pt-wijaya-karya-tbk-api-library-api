import Route from "../../../../../../dist/qpass/object/business/create/route/create";
import Create from "../../../../../../dist/qpass/object/business/create/request/business/create";
import Request from "../../../../../../dist/qpass/object/business/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/business/create request', () => {

    RequestRoute(Request, Route(), new Create('name', 'abbreviation'));
});
