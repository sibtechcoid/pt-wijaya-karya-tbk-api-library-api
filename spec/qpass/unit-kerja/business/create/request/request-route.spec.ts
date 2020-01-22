import Route from "../../../../../../dist/unit-kerja/jenis-usaha/create/route/create";
import Request from "../../../../../../dist/unit-kerja/jenis-usaha/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/business/create request', () => {

    RequestRoute(Request, Route(),{jenisUnit:0, nama:'nama', singkatan:'singkatan'});
});
