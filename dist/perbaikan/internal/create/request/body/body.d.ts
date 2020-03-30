import Tinjauan from "../../../tinjauan/tinjauan";
import Keputusan from "../../../../keputusan/keputusan";
export default interface Body {
    hasilTemuan: number;
    /**
     * perintah
     */
    prosesBisnis: number;
    faktor: string;
    analisis: string;
    tinjauan: Tinjauan;
    tinjauanCatatan: string;
    perbaikan: string | Date;
    closing: string[];
    pic: number;
    /**
     * PTKA
     */
    prosedur: number;
    ptka: string;
    konsekuensi: string;
    referensi: string;
    keputusan: Keputusan;
    selesai: string | Date;
    /**
     * remark
     */
    ditutup: boolean;
    catatan: string;
}
