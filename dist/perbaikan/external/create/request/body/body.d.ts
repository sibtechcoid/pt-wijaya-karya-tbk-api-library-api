import Tinjauan from "../../../tinjauan/tinjauan";
export default interface Body {
    audit: number;
    /**
     * perintah
     */
    kategori: Tinjauan;
    klausul: string;
    auditor: string;
    deskripsi: string;
    deadline: string;
    penyebab: string;
    koreksi: string;
    bukti: string[];
    unitKerja: string;
    /**
     * PTKA
     */
    kontak: string;
    noPtka: string;
    fungsi: string;
    dibuat: string | Date;
    penemu: string;
    biro: string;
    konsekuensi: string;
    tanggal: string | Date;
    /**
     * remark
     */
    ditutup: boolean;
}
