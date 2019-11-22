import Route from "../../../../../../dist/internal/place/type/update/route/create";
import Type from "../../../../../../dist/internal/place/type/create/request/type/type";
import TypeCreate from "../../../../../../dist/internal/place/type/create/request/type/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/internal/place/type/update/request/create";
import RequestRoute from "../../../../../request/request-route";
import Assign from "../../../../../../dist/id/assign";

describe('internal/place/type/update request', () => {

    RequestRoute<Type & Id>(
        Request,
        Route(),
        Assign(new TypeCreate('username', 'password'), new IdCreate(1))
    );
});
