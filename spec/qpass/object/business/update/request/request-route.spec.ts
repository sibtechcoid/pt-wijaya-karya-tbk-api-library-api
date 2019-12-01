import Route from "../../../../../../dist/qpass/object/business/update/route/create";
import Request from "../../../../../../dist/qpass/object/business/update/request/create";
import RequestRoute from "../../../../../request/request-route";
import Data from "../../../../../../dist/qpass/object/business/update/request/body/body";

describe('qpass/object/business/update  request', () => {

    RequestRoute<Data>(
        Request,
        Route(),
        {name:'name', abbreviation:'abbreviation',id:1}
    );
});
