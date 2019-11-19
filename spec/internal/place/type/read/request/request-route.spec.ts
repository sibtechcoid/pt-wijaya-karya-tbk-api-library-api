import Route from "../../../../../../dist/internal/place/type/read/route/create";
import Request from "../../../../../../dist/internal/place/type/read/request/create";
import RequestRoute from "../../../../../request/request-route";
import Deactivated from "../../../../../../dist/deactivated/deactivated";
import DeactivatedCreate from "../../../../../../dist/deactivated/create";

describe('internal/place/type/read request', () => {

    RequestRoute<Deactivated>((d:Deactivated) => Request(d), Route(),new  DeactivatedCreate(true));
});
