import Access from "../../../../../dist/user/access/update/request/body/body";
import Request from "../../../../../dist/user/access/update/request/create";
import Route from "../../../../../dist/user/access/update/route/create";
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
            level: [],
            auditProgram: [],
        }
    );
});
