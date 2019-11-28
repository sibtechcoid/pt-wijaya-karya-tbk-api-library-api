import Route from "../../../../../../dist/qpass/object/business/activate/route/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/object/business/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Assign from "../../../../../../dist/id/assign";
import Active from "../../../../../../dist/active/active";
import ActiveCreate from "../../../../../../dist/active/create";

describe('qpass/object/business/delete  request', () => {

    RequestRoute<Active>(
        Request,
        Route(),
        new ActiveCreate(1, true)
    );
});
