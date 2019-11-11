import Route from "../../../../../../dist/qpass/place/business/update/route/create";
import CreateId from "../../../../../../dist/qpass/place/business/create-id";
import business from "../../../../../../dist/qpass/place/business/business";
import businessCreate from "../../../../../../dist/qpass/place/business/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/business/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/place/business/update  request', () => {

    RequestRoute<(business & Id)[]>(
        (body) => Request(body),
        Route(),
        [CreateId(new businessCreate('username', 'password'), new IdCreate(1))]
    );
});
