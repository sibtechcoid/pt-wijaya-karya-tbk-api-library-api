import Route from "../../../../../../dist/qpass/place/level/delete/route/create";
import CreateId from "../../../../../../dist/qpass/place/level/create-id";
import level from "../../../../../../dist/qpass/place/level/level";
import levelCreate from "../../../../../../dist/qpass/place/level/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/level/delete/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/place/level/delete request', () => {

    RequestRoute<Id[]>(
        (body) => Request(body),
        Route(),
        [new IdCreate(1)]
    );
});
