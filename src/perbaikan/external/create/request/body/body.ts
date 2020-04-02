import Tinjauan from "../../../tinjauan/tinjauan";
import Status from "../../../status/status";
import Audit from "../../../../../audit/read/response/body/body";

export default interface Body {

    audit: number;

    /**
     * perintah
     */
    kategori : Tinjauan;
    klausul : string;
    auditor : string;
    deskripsi : string;
    deadline : string;

    penyebab : string;
    koreksi : string;

    bukti : string[];
    unitKerja : string;

    /**
     * PTKA
     */
    kontak : string;
    ptka : string;
    fungsi : string;

    dibuat : string|Date;
    penemu : string;
    biro : string;
    konsekuensi : string;
    tanggal : string|Date;
    /**
     * remark
     */
   // status : Status;
    ditutup : boolean;

}
