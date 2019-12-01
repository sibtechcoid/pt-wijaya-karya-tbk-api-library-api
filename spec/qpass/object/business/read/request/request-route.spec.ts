import Route from "../../../../../../dist/qpass/object/type/read/route/create";
import Request from "../../../../../../dist/qpass/object/type/read/request/create";
import RequestRoute from "../../../../../request/request-route";
import Deactivated from "../../../../../../dist/deactivate/read/request/body/body";

describe('qpass/object/type/read request', () => {

    RequestRoute<Deactivated>(Request, Route(),{deactivate:true});
});
