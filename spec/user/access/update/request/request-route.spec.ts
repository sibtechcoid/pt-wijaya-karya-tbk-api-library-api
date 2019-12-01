import Access from "../../../../../dist/user/access/update/request/body/body";
import Id from "../../../../../dist/id/id";
import CreateId from "../../../../../dist/id/create";
import Request from "../../../../../dist/user/access/update/request/create";
import Route from "../../../../../dist/user/access/update/route/create";
import RequestRoute from "../../../../request/request-route";
import Qpass from "../../../../../dist/user/access/qpass/qpass";
import Internal from "../../../../../dist/user/access/internal/internal";
import Assign from "../../../../../dist/id/assign";


describe('qpass/object/type/update request', () => {

    RequestRoute<Access & Id>(
        Request,
        Route(),
        {
            qpass : [Qpass.CREATE, Qpass.EDIT],
            internal : [Internal.CREATE, Internal.EDIT],
            id:0
        }
    );
});
