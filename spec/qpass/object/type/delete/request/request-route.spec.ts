import Route from "../../../../../../dist/qpass/object/type/activate/route/create";
import Request from "../../../../../../dist/qpass/object/type/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Activable from "../../../../../../dist/deactivate/update/request/body/body";

describe('qpass/object/type/delete request', () => {

    RequestRoute<Activable>(
        (body) => Request(body),
        Route(),
        {
            id:0,
            deactivate:true
        }
    );
});
