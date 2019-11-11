import Route from "../../../../../../dist/qpass/place/type/delete/route/create";
import CreateId from "../../../../../../dist/qpass/place/type/create-id";
import Type from "../../../../../../dist/qpass/place/type/type";
import TypeCreate from "../../../../../../dist/qpass/place/type/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/type/delete/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/place/type/delete request', () => {

    RequestRoute<Id[]>(
        (body) => Request(body),
        Route(),
        [new IdCreate(1)]
    );
});
