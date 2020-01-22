import Route from "../../../../../../dist/unit-kerja/level-usaha/delete/route/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/unit-kerja/level-usaha/delete/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/level/delete request', () => {

    RequestRoute<Id>(
        (body) => Request(body),
        Route(),
        new IdCreate(1)
    );
});
