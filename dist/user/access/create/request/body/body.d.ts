import Project from "../../../proyek/access";
import UnitKerja from "../../../unit-kerja/access";
import JenisUnit from "../../../jenis-unit/access";
import JenisUsaha from "../../../jenis-usaha/access";
import LevelUsaha from "../../../level-usaha/access";
import UserAccess from "../../../user/access";
import Rencana from "../../../rencana/access";
import Fungsi from "../../../fungsi/access";
import Klausul from "../../../klausul/access";
import Prosedur from "../../../prosedur/access";
import Level from "../../../level/access";
import AuditProgram from "../../../audit-program/access";
export default interface Body {
    proyek: Project[];
    rencana: Rencana[];
    user: UserAccess[];
    unitKerja: UnitKerja[];
    jenisUnit: JenisUnit[];
    jenisUsaha: JenisUsaha[];
    levelUsaha: LevelUsaha[];
    prosedur: Prosedur[];
    fungsi: Fungsi[];
    klausul: Klausul[];
    level: Level[];
    auditProgram: AuditProgram[];
}
