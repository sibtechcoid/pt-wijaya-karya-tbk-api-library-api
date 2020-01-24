import ReadBody from "../../../read/response/body/body";
import Audit from "../../../../../audit/read/response/body/body";
export default interface Body extends Omit<ReadBody, 'audit'> {
    audit: Omit<Audit, 'anggota' | 'penolakan' | 'unitKerja' | 'penyetuju'>;
}
