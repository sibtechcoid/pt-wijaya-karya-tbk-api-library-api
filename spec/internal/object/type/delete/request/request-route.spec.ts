import Route from "../../../../../../dist/internal/object/type/activate/route/create";
import Request from "../../../../../../dist/internal/object/type/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Active from "../../../../../../dist/deactivate/update/request/body/body";
;

describe('internal/object/type/delete request', () => {

    RequestRoute<Active>(
        (body) => Request(body),
        Route(),
        {id:0, deactivate : true}
    );
});
