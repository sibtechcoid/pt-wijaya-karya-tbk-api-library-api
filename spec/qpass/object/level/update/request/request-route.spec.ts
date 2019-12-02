import Route from "../../../../../../dist/qpass/object/level/update/route/create";
import level       from "../../../../../../dist/qpass/object/level/create/request/level/level";
import Createlevel from "../../../../../../dist/qpass/object/level/create/request/level/create";
import IdCreate from "../../../../../../dist/id/create";
import AssignId from "../../../../../../dist/id/assign";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/object/level/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/level/update request', () => {

    // let level = IdCreateWith(new Createlevel('name', 'abbreviation'), new IdCreate(1));
    // let business = IdCreateWith(new CreateBusiness('name', 'abbreviation'), new IdCreate(1));
    // let place = IdCreateWith(new CreatePlace('name', 'abbreviation', 'address', 0, 0), new IdCreate(1));


    RequestRoute<level & Id>(
        Request,
        Route(),
        AssignId(new Createlevel('name', 'abbreviation', 0), new IdCreate(1))
    );
});