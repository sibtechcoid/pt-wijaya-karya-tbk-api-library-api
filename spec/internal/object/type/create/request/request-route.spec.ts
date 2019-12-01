import Route from "../../../../../../dist/internal/object/type/create/route/create";
import Create from "../../../../../../dist/internal/object/type/create/request/type/create";
import Request from "../../../../../../dist/internal/object/type/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('internal/object/type/create', () => {

    RequestRoute(Request, Route(), new Create('name', 'abbreviation'));
});
