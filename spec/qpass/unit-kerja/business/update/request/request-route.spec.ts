import Route from "../../../../../../dist/unit-kerja/jenis-usaha/update/route/create";
import Request from "../../../../../../dist/unit-kerja/jenis-usaha/update/request/create";
import RequestRoute from "../../../../../request/request-route";
import Data from "../../../../../../dist/unit-kerja/jenis-usaha/update/request/body/body";

describe('qpass/object/business/update  request', () => {

    RequestRoute<Data>(
        Request,
        Route(),
        {nama:'nama', singkatan:'singkatan',id:1}
    );
});
