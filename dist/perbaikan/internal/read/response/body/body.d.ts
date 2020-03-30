import Keputusan from "../../../../keputusan/keputusan";
import Tinjauan from "../../../tinjauan/tinjauan";
import User from "../../../../../user/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Prosedur from "../../../../../jadwal-rinci/prosedur/read/response/body/body";
import ProsesBisnis from "../../../../../jadwal-rinci/proses-bisnis/read/response/body/body";
import HasilTemuan from "../../../../../hasil-temuan/internal/read/response/body/body";
export default interface Body extends Record, Id {
    hasilTemuan: Omit<HasilTemuan, 'prosesBisnis' | 'jadwalRinci' | 'prosedur' | 'klausul' | 'fungsi' | 'masalah' | 'objek' | 'kriteria' | 'lampiran' | 'penolakan'>;
    /**
     * perintah
     */
    faktor: string;
    analisis: string;
    tinjauan: Tinjauan;
    tinjauanCatatan: string;
    perbaikan: null | string | Date;
    closing: string[];
    pic: Omit<User, 'extraAkses' | 'akses' | 'jabatan'> | null;
    prosesBisnis: Omit<ProsesBisnis, 'prosedur'>;
    /**
     * PTKA
     */
    prosedur: Omit<Prosedur, 'prosesBisnis'>;
    ptka: string;
    konsekuensi: string;
    referensi: string;
    keputusan: null | Keputusan;
    selesai: null | string | Date;
    /**
     * remark
     */
    ditutup: boolean;
    catatan: string;
}
