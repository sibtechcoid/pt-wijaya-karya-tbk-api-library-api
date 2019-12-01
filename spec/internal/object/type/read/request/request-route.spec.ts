import Route from "../../../../../../dist/internal/object/type/read/route/create";
import Request from "../../../../../../dist/internal/object/type/read/request/create";
import RequestRoute from "../../../../../request/request-route";
import Deactivated from "../../../../../../dist/deactivate/read/request/body/body";

describe('internal/object/type/read request', () => {

    RequestRoute<Deactivated>(Request, Route(), {deactivate:true});
});
