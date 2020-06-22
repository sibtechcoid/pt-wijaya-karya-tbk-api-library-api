import Keputusan from "../../../../keputusan/keputusan";
import User from "../../../../../user/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import HasilTemuan from "../../../../../hasil-temuan/qpass/read/response/body/body";
import Level from "../../../../../hasil-temuan/level/reads/response/body/body";
export default interface Body extends Record, Id {
    hasilTemuan: Omit<HasilTemuan, 'level' | 'perbaikan'>;
    /**
     * perintah
     */
    prosesBisnis: Omit<Level, 'parent' | 'levelUsaha' | 'ruangan'>;
    faktor: string;
    analisis: string;
    tindakan: string;
    perbaikan: null | string | Date;
    pic: Omit<User, 'akses' | 'jabatan'> | null;
    closing: string[];
    /**
     * PTKA
     */
    prosedur: Omit<Level, 'parent' | 'levelUsaha' | 'ruangan'>;
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
    remark: string;
}
