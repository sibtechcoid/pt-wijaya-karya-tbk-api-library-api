import Route from "../../../../../../dist/qpass/place/type/update/route/create";
import Place from "../../../../../../dist/qpass/place/type/create/request/type/type";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/type/update/request/create";
import RequestRoute from "../../../../../request/request-route";
import Create from "./create";


describe('qpass/place/type/update request', () => {

    RequestRoute<Place & Id>(
        Request,
        Route(),
        Create()
    );
});
