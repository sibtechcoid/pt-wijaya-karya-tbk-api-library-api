import Route from "../../../../../../dist/qpass/object/business/activate/route/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/object/business/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Assign from "../../../../../../dist/id/assign";
import Active from "../../../../../../dist/deactivate/update/request/body/body";
import ActiveCreate from "../../../../../../dist/deactivate/update/request/body/body";

describe('qpass/object/business/delete  request', () => {

    RequestRoute<Active>(
        Request,
        Route(),
        {id:1, deactivate:true}
    );
});
