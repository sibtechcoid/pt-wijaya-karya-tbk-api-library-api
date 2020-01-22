import Route from "../../../../../../dist/unit-kerja/level-usaha/create/route/create";
import Request from "../../../../../../dist/unit-kerja/level-usaha/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/level/create  request', () => {

    RequestRoute((body) => Request(body), Route(), {nama:'nama', singkatan:'singkatan', jenisUnit:0});
});
