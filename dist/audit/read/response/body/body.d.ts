import Object from "../../../../unit-kerja/read/response/body/body";
import Member from "../../../../anggota/read/response/body/body";
import AuditStatus from "../../../status/status";
import Type from "../../../type/type";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Schedule from "../../../../jadwal/read/response/body/body";
import Record from "../../../../record/record";
import User from "../../../../user/reads/response/body/body";
import Penolakan from "../penolakan/penolakan";
export default interface Body extends Deactivate, Id, Schedule, Record {
    status: AuditStatus;
    unitKerja: Object;
    anggota: Omit<Member, 'akses'>[];
    tipe: Type;
    penyetuju: Omit<User, 'extraAkses' | 'jabatan' | 'akses'> | null;
    penolakan: Penolakan[];
}
