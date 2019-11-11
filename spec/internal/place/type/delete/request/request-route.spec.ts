import Route from "../../../../../../dist/internal/place/type/delete/route/create";
import CreateId from "../../../../../../dist/internal/place/type/create-id";
import Type from "../../../../../../dist/internal/place/type/type";
import TypeCreate from "../../../../../../dist/internal/place/type/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/internal/place/type/delete/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('internal/place/type/delete request', () => {

    RequestRoute<Id[]>(
        (body) => Request(body),
        Route(),
        [new IdCreate(1)]
    );
});
