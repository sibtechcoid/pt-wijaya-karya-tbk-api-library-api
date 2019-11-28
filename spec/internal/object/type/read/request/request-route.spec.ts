import Route from "../../../../../../dist/internal/object/type/read/route/create";
import Request from "../../../../../../dist/internal/object/type/read/request/create";
import RequestRoute from "../../../../../request/request-route";
import Deactivate from "../../../../../../dist/deactivate/deactivate";
import DeactivatedCreate from "../../../../../../dist/deactivate/create";

describe('internal/object/type/read request', () => {

    RequestRoute<Deactivate>(Request, Route(), new DeactivatedCreate(true));
});
