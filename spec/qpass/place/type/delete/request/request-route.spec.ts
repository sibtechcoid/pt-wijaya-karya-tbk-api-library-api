import Route from "../../../../../../dist/qpass/place/type/activate/route/create";
import Request from "../../../../../../dist/qpass/place/type/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Activable from "../../../../../../dist/active/active";
import CreateActivable from "../../../../../../dist/active/create";

describe('qpass/place/type/delete request', () => {

    RequestRoute<Activable>(
        (body) => Request(body),
        Route(),
        new CreateActivable(1, true)
    );
});
