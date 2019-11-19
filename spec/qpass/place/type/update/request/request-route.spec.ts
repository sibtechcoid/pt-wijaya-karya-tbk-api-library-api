import Route from "../../../../../../dist/qpass/place/type/update/route/create";
import CreateId from "../../../../../../dist/qpass/place/type/create-id";
import Place from "../../../../../../dist/qpass/place/create/request/place/place";
import TypeCreate from "../../../../../../dist/qpass/place/type/update/request/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/type/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/place/type/update request', () => {

    RequestRoute<Place & Id>(
        (body) => Request(body),
        Route(),
        CreateId(new TypeCreate('username', 'password'), new IdCreate(1))
    );
});
