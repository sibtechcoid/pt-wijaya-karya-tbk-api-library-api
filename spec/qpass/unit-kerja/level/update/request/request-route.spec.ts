import Route from "../../../../../../dist/unit-kerja/level-usaha/update/route/create";
import level       from "../../../../../../dist/unit-kerja/level-usaha/update/request/body/body";
import IdCreate from "../../../../../../dist/id/create";
import AssignId from "../../../../../../dist/id/assign";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/unit-kerja/level-usaha/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/level/update request', () => {

    RequestRoute<level & Id>(
        Request,
        Route(),
        AssignId({nama:'nama', singkatan:'singkatan', type:0}, new IdCreate(1))
    );
});
