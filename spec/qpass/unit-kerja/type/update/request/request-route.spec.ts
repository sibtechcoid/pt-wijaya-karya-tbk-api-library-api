import Route from "../../../../../../dist/unit-kerja/jenis-unit/update/route/create";
import Type from "../../../../../../dist/unit-kerja/jenis-unit/update/request/body/body";
import Request from "../../../../../../dist/unit-kerja/jenis-unit/update/request/create";
import RequestRoute from "../../../../../request/request-route";


describe('qpass/object/type/update request', () => {

    RequestRoute<Type>(
        Request,
        Route(),
        {
            id : 0,
            nama : 'nama',
            singkatan : 'singkatan'
        }
    );
});
