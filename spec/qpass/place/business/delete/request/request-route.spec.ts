import Route from "../../../../../../dist/qpass/place/business/delete/route/create";
import CreateId from "../../../../../../dist/qpass/place/business/create-id";
import business from "../../../../../../dist/qpass/place/business/business";
import businessCreate from "../../../../../../dist/qpass/place/business/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/business/delete/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/place/business/delete  request', () => {

    RequestRoute<Id[]>(
        (body) => Request(body),
        Route(),
        [new IdCreate(1)]
    );
});
