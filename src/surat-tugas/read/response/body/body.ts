import Id from "../../../../id/id";
import Audit from "../../../../audit/read/response/body/body";
import Record from "../../../../record/record";

export interface LimitedAudit extends Omit<Audit, 'anggota' | 'penolakan' | 'penyetuju'|'unitKerja'|'suratTugas'> {

    unitKerja : Omit<Object,'levelUsaha'|'jenisUnit'|'jenisUsaha'>
}


export default interface Body extends Id, Record {
    audit: LimitedAudit[];
    nomer: string;
    /**
     * file path
     */
    lampiran: string[];
}
