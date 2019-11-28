import Route from "../../../../../../dist/qpass/object/business/update/route/create";
import business from "../../../../../../dist/qpass/object/business/create/request/business/business";
import businessCreate from "../../../../../../dist/qpass/object/business/create/request/business/create";
import IdCreate from "../../../../../../dist/id/create";
import IdAssign from "../../../../../../dist/id/assign";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/object/business/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/business/update  request', () => {

    RequestRoute<business & Id>(
        (body) => Request(body),
        Route(),
        IdAssign(new businessCreate('username', 'password'), new IdCreate(1))
    );
});
