import Route from "../../../../../../dist/internal/object/type/update/route/create";
import Type from "../../../../../../dist/internal/object/type/create/request/type/type";
import TypeCreate from "../../../../../../dist/internal/object/type/create/request/type/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/internal/object/type/update/request/create";
import RequestRoute from "../../../../../request/request-route";
import Assign from "../../../../../../dist/id/assign";

describe('internal/object/type/update request', () => {

    RequestRoute<Type & Id>(
        Request,
        Route(),
        Assign(new TypeCreate('username', 'password'), new IdCreate(1))
    );
});
