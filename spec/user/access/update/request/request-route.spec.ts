import Access from "../../../../../dist/user/access/update/request/body/body";
import Id from "../../../../../dist/id/id";
import CreateId from "../../../../../dist/id/create";
import Request from "../../../../../dist/user/access/update/request/create";
import Route from "../../../../../dist/user/access/update/route/create";
import RequestRoute from "../../../../request/request-route";
import Qpass from "../../../../../dist/user/access/qpass/qpass";
import Internal from "../../../../../dist/user/access/internal/internal";
import Assign from "../../../../../dist/id/assign";
import ProjectAccess from "../../../../../dist/user/access/proyek/access";
import RencanaAccess from "../../../../../dist/user/access/rencana/access";
import UserAccess from "../../../../../dist/user/access/user/access";
import UnitKerjaAccess from "../../../../../dist/user/access/unit-kerja/access";
import JabatanAccess from "../../../../../dist/user/access/jabatan/access";
import JenisUnit from "../../../../../dist/user/access/jenis-unit/access";
import JenisUsaha from "../../../../../dist/user/access/jenis-usaha/access";
import LevelUsaha from "../../../../../dist/user/access/level-usaha/access";
import Prosedur from "../../../../../dist/user/access/prosedur/access";
import Fungsi from "../../../../../dist/user/access/fungsi/access";
import Klausul from "../../../../../dist/user/access/klausul/access";
import Level from "../../../../../dist/user/access/level/access";
import AuditProgram from "../../../../../dist/user/access/audit-program/access";

describe('qpass/object/type/update request', () => {

    RequestRoute<Access>(
        Request,
        Route(),
        {
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
