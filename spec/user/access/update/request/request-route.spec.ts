import Access from "../../../../../dist/user/access/update/request/access/access";
import Id from "../../../../../dist/id/id";
import CreateId from "../../../../../dist/id/create";
import Request from "../../../../../dist/user/access/update/request/create";
import Create from "../../../../../dist/user/access/update/request/access/create";
import Route from "../../../../../dist/user/access/update/route/create";
import RequestRoute from "../../../../request/request-route";
import Qpass from "../../../../../dist/user/access/update/request/qpass/qpass";
import Internal from "../../../../../dist/user/access/update/request/internal/internal";
import Assign from "../../../../../dist/id/assign";


describe('qpass/place/type/update request', () => {

    RequestRoute<Access & Id>(
        Request,
        Route(),
        Assign(new Create([
            Qpass.CREATE,
            Qpass.EDIT,
        ], [
            Internal.CREATE,
            Internal.EDIT,
        ]), new CreateId(0))
    );
});
