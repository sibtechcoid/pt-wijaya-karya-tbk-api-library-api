import Project from "../../../proyek/akses";
import UnitKerja from "../../../unit-kerja/akses";
import JenisUnit from "../../../jenis-unit/akses";
import JenisUsaha from "../../../jenis-usaha/akses";
import LevelUsaha from "../../../level-usaha/akses";
import UserAkses from "../../../user/akses";
import JabatanAkses from "../../../jabatan/akses";
import Rencana from "../../../rencana/akses";
import Fungsi from "../../../fungsi/akses";
import Klausul from "../../../klausul/akses";
import Prosedur from "../../../prosedur/akses";
import JabatanAnggotaAkses from "../../../jabatan-anggota/akses";
import Level from "../../../level/akses";
import JadwalRinci from "../../../jadwal-rinci/akses";
import ProsesBisnis from "../../../proses-bisnis/akses";
import AuditProgram from "../../../audit-program/akses";

export default interface Body {


    proyek : Project[];
    rencana : Rencana[];
    user : UserAkses[];
    jabatan : JabatanAkses[];
    jabatanAnggota : JabatanAnggotaAkses[];


    unitKerja : UnitKerja[];
    jenisUnit : JenisUnit[];
    jenisUsaha : JenisUsaha[];
    levelUsaha : LevelUsaha[];

    prosedur : Prosedur[];
    fungsi : Fungsi[];
    klausul : Klausul[];
    level : Level[];
    auditProgram : AuditProgram[];
    prosesBisnis : ProsesBisnis[];
    jadwalRinci : JadwalRinci[];
}
