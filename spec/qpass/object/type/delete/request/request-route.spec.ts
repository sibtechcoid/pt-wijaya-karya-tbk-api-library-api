import Route from "../../../../../../dist/qpass/object/type/activate/route/create";
import Request from "../../../../../../dist/qpass/object/type/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Activable from "../../../../../../dist/active/active";
import CreateActivable from "../../../../../../dist/active/create";

describe('qpass/object/type/delete request', () => {

    RequestRoute<Activable>(
        (body) => Request(body),
        Route(),
        new CreateActivable(1, true)
    );
});
