import Route from "../../../../../../dist/qpass/object/type/update/route/create";
import Place from "../../../../../../dist/qpass/object/type/create/request/type/type";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/object/type/update/request/create";
import RequestRoute from "../../../../../request/request-route";
import Create from "./create";

describe('qpass/object/type/update request', () => {

    RequestRoute<Place & Id>(
        Request,
        Route(),
        Create()
    );
});
