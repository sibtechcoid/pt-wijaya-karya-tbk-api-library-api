import Route from "../../../../../../dist/qpass/place/level/update/route/create";
import CreateId from "../../../../../../dist/qpass/place/level/create-id";
import level       from "../../../../../../dist/qpass/place/level/level";
import Createlevel from "../../../../../../dist/qpass/place/level/create";
import levelCreate from "../../../../../../dist/qpass/place/level/create";
import IdCreate from "../../../../../../dist/id/create";
import IdCreateWith from "../../../../../../dist/id/create-with";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/level/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/place/level/update request', () => {

    RequestRoute<level & Id>(
        (body) => Request(body),
        Route(),
        CreateId(new levelCreate('username', 'password'), IdCreateWith(new Createlevel('name', 'abbreviation'), new IdCreate(1)))
    );
});
