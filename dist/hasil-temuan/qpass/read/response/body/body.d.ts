import Record from "../../../../../record/record";
import Level from "../../../../level/reads/response/body/body";
import Audit from "../../../../../audit/read/response/body/body";
export default interface Body extends Record {
    level: Omit<Level, 'parent'>;
    audit: Omit<Audit, 'unitKerja' | 'anggota' | 'penyetuju' | 'penolakan'>;
    hasil: number;
}
