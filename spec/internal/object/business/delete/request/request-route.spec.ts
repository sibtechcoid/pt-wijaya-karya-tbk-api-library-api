import Route from "../../../../../../dist/qpass/object/business/activate/route/create";
import Request from "../../../../../../dist/qpass/object/business/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Active from "../../../../../../dist/deactivate/update/request/body/body";

describe('qpass/object/business/delete  request', () => {

    RequestRoute<Active>(
        Request,
        Route(),
        {id:1, deactivate:true}
    );
});
