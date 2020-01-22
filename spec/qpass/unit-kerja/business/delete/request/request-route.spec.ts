import Route from "../../../../../../dist/unit-kerja/jenis-usaha/activate/route/create";
import Request from "../../../../../../dist/unit-kerja/jenis-usaha/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Active from "../../../../../../dist/deactivate/update/request/body/body";

describe('qpass/object/business/delete  request', () => {

    RequestRoute<Active>(
        Request,
        Route(),
        {id:0, deactivate:true}
    );
});
