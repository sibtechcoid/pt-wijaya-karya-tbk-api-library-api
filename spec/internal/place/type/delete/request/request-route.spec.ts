import Route from "../../../../../../dist/internal/place/type/activate/route/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/internal/place/type/activate/request/create";
import RequestRoute from "../../../../../request/request-route";
import Active from "../../../../../../dist/active/active";
import CreateActive from "../../../../../../dist/active/create";

describe('internal/place/type/delete request', () => {

    RequestRoute<Active>(
        (body) => Request(body),
        Route(),
        new CreateActive(1, true)
    );
});
