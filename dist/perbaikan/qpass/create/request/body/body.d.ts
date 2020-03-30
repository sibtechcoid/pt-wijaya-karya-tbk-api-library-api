import Keputusan from "../../../../keputusan/keputusan";
export default interface Body {
    hasilTemuan: number;
    prosesBisnis: string;
    faktor: string;
    analisis: string;
    tindakLanjut: string;
    perbaikan: null | string | Date;
    pic: number | null;
    closing: string[];
    /**
     * PTKA
     */
    prosedur: string;
    ptka: string;
    konsekuensi: string;
    keputusan: null | Keputusan;
    selesai: null | string | Date;
    /**
     * remarks
     */
    ditutup: boolean;
    catatan: string;
}
