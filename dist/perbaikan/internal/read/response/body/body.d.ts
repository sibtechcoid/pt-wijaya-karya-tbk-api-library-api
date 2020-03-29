import Keputusan from "../../../../keputusan/keputusan";
import Tinjauan from "../../../tinjauan/tinjauan";
import User from "../../../../../user/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
export default interface Body extends Record, Id {
    hasilTemuan: number;
    /**
     * perintah
     */
    faktor: null | string;
    analisis: null | string;
    tinjauan: Tinjauan;
    tinjauanCatatan: null | string;
    perbaikan: null | string | Date;
    closing: string[];
    pic: Omit<User, 'extraAkses' | 'akses' | 'jabatan'> | null;
    /**
     * PTKA
     */
    prosedur: number;
    noPtka: string;
    konsekuensi: string;
    referensi: string;
    keputusan: null | Keputusan;
    selesai: null | string | Date;
    /**
     * remark
     */
    ditutup: boolean;
    catatan: null | string;
}
