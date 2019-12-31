import Route from "../../../../../../dist/qpass/object/business/update/route/create";
import Business from "../../../../../../dist/qpass/object/business/update/request/body/body";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/object/business/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/business/update  request', () => {

    RequestRoute<Business & Id>(
        Request,
        Route(),
        {name:'username', abbreviation:'password',id:0}
    );
});
