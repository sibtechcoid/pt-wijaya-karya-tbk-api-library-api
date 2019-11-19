import Route from "../../../../../../dist/qpass/place/type/activate/route/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/type/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Activable from "../../../../../../dist/activable/activable";
import CreateActivable from "../../../../../../dist/activable/create";

describe('qpass/place/type/delete request', () => {

    RequestRoute<Activable>(
        (body) => Request(body),
        Route(),
        CreateActivable(1, true)
    );
});
