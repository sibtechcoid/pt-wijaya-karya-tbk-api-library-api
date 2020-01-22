import Route from "../../../../../../dist/unit-kerja/jenis-unit/create/route/create";
import Request from "../../../../../../dist/unit-kerja/jenis-unit/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('qpass/object/type/create request', () => {

    RequestRoute((body) => Request(body), Route(), {nama:'nama', singkatan:'singkatan'});
});
