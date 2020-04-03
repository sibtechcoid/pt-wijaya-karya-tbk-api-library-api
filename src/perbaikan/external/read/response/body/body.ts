import Tinjauan from "../../../tinjauan/tinjauan";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Audit from "../../../../../audit/read/response/body/body";
import Status from "../../../status/status";

export default interface Body extends Record, Id {

    audit : Omit<Audit, 'unitKerja'|'penyetuju'|'penolakan'|'anggota'|'suratTugas'>;

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
    status : Status

}
