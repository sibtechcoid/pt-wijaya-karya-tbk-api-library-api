import Keputusan from "../../../../keputusan/keputusan";
export default interface Body {
    hasilTemuan: number;
    /**
     * perintah
     */
    prosesBisnis: number;
    faktor: string;
    analisis: string;
    tindakan: string;
    perbaikan: string | Date;
    pic: number;
    closing: string[];
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
     * table
     */
    catatan: string;
    /**
     * Save
     */
    ditutup: boolean;
    remark: string;
}
