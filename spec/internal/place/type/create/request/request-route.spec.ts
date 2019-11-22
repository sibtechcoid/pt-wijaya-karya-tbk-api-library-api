import Route from "../../../../../../dist/internal/place/type/create/route/create";
import Create from "../../../../../../dist/internal/place/type/create/request/type/create";
import Request from "../../../../../../dist/internal/place/type/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('internal/place/type/create', () => {

    RequestRoute(Request, Route(), new Create('name', 'abbreviation'));
});
