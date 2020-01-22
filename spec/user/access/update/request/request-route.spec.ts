import Access from "../../../../../dist/user/akses/update/request/body/body";
import Request from "../../../../../dist/user/akses/update/request/create";
import Route from "../../../../../dist/user/akses/update/route/create";
import RequestRoute from "../../../../request/request-route";

describe('qpass/object/type/update request', () => {

    RequestRoute<Access>(
        Request,
        Route(),
        {
            id: 1,
            proyek: [],
            rencana: [],
            user: [],
            jabatan: [],
            unitKerja: [],
            jenisUnit: [],
            jenisUsaha: [],
            levelUsaha: [],
            prosedur: [],
            fungsi: [],
            klausul: [],
            jadwalRinciLevel: [],
            auditProgram: [],
        }
    );
});
