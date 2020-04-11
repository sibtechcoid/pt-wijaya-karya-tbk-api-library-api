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
import SuratTugas from "../../../surat-tugas/akses";
import JadwalRinciInternal from "../../../jadwal-rinci-internal/akses";
import JadwalRinciQpass from "../../../jadwal-rinci-qpass/akses";
import HasilTemuanInternal from "../../../hasil-temuan-internal/akses";
import HasilTemuanQpass from "../../../hasil-temuan-qpass/akses";
import HasilTemuanKriteria from "../../../hasil-temuan-kriteria/akses";
import HasilTemuanLevel from "../../../hasil-temuan-level/akses";
import ProsesBisnis from "../../../proses-bisnis/akses";
import AuditProgram from "../../../audit-program/akses";
import PerbaikanExternal from "../../../perbaikan-external/akses";
import PerbaikanInternal from "../../../perbaikan-internal/akses";
import PerbaikanQpass from "../../../perbaikan-qpass/akses";
import Evaluasi from "../../../evaluasi/akses";
import Kuisioner from "../../../kuisioner/akses";

export default interface Body {

    evaluasi : Evaluasi[];
    kuisioner : Kuisioner[];

    perbaikanInternal : PerbaikanInternal[];
    perbaikanQpass : PerbaikanQpass[];
    perbaikanExternal : PerbaikanExternal [];

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
    level : Level[];

    jadwalRinciInternal : JadwalRinciInternal[];
    jadwalRinciQpass : JadwalRinciQpass[];

    hasilTemuanInternal : HasilTemuanInternal[];
    hasilTemuanQpass : HasilTemuanQpass[];

    hasilTemuanKriteria : HasilTemuanKriteria[];
    hasilTemuanLevel : HasilTemuanLevel[];
}
