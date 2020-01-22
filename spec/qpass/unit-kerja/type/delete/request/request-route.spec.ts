import Route from "../../../../../../dist/unit-kerja/jenis-unit/activate/route/create";
import Request from "../../../../../../dist/unit-kerja/jenis-unit/activate/request/create";
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
