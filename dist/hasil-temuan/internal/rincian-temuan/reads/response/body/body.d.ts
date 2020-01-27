import JadwalRinci from "../../../../../../jadwal-rinci/internal/read/response/body/body";
import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Fungsi from "../../../../../../jadwal-rinci/fungsi/read/response/body/body";
import Prosedur from "../../../../../../jadwal-rinci/prosedur/read/response/body/body";
import ProsesBisnis from "../../../../../../jadwal-rinci/proses-bisnis/read/response/body/body";
import Klausul from "../../../../../../jadwal-rinci/klausul/read/response/body/body";
import Kriteria from "../../../../../kriteria/read/response/body/body";
import Status from "../../../status/status";
export default interface Body extends Record, Id {
    jadwalRinci: Omit<JadwalRinci, 'audit' | 'fungsi' | 'prosedur' | 'prosesBisnis' | 'klausul' | 'auditor'>;
    prosedur: Omit<Prosedur, 'prosesBisnis'>;
    prosesBisnis: Omit<ProsesBisnis, 'prosedur'>;
    klausul: Omit<Klausul, 'auditProgram'>[];
    fungsi: Fungsi[];
    masalah: string[];
    objek: string[];
    kriteria: Kriteria[];
    status: Status;
    lampiran: string[];
}
