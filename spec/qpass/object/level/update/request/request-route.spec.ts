import Route from "../../../../../../dist/qpass/object/level/update/route/create";
import level       from "../../../../../../dist/qpass/object/level/update/request/body/body";
import IdCreate from "../../../../../../dist/id/create";
import AssignId from "../../../../../../dist/id/assign";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/object/level/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/level/update request', () => {

    RequestRoute<level & Id>(
        Request,
        Route(),
        AssignId({name:'name', abbreviation:'abbreviation', type:0}, new IdCreate(1))
    );
});
