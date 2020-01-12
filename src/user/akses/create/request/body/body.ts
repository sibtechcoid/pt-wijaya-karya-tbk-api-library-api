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
import Level from "../../../jadwal-rinci-level/akses";
import SuratTugas from "../../../surat-tugas/akses";
import InternalJadwalRinci from "../../../internal-jadwal-rinci/akses";
import QpassJadwalRinci from "../../../qpass-jadwal-rinci/akses";
import InternalHasilTemuan from "../../../internal-hasil-temuan/akses";
import QpassHasilTemuan from "../../../qpass-hasil-temuan/akses";
import ProsesBisnis from "../../../proses-bisnis/akses";
import AuditProgram from "../../../audit-program/akses";

export default interface Body {

    suratTugas : SuratTugas[];
    proyek : Project[];
    rencana : Rencana[];
    user : UserAkses[];
    jabatan : JabatanAkses[];
    jabatanAnggota : JabatanAnggotaAkses[];


    unitKerja : UnitKerja[];
    jenisUnit : JenisUnit[];
    jenisUsaha : JenisUsaha[];
    levelUsaha : LevelUsaha[];

    prosesBisnis : ProsesBisnis[];

    prosedur : Prosedur[];
    fungsi : Fungsi[];
    auditProgram : AuditProgram[];
    klausul : Klausul[];
    jadwalRinciLevel : Level[];

    internalJadwalRinci : InternalJadwalRinci[];
    qpassJadwalRinci : QpassJadwalRinci[];

    internalHasilTemuan : InternalHasilTemuan[];
    qpassHasilTemuan : QpassHasilTemuan[];
}
