import Object from "../../../../unit-kerja/read/response/body/body";
import Member from "../../../../anggota/read/response/body/body";
import auditStatus from "../../../status/status";
import Type from "../../../type/type";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Schedule from "../../../../schedule/read/response/body/body";
import Record from "../../../../record/record";
export default interface Body extends /*Baseaudit<Anggotatatus, auditStatus, Group, Jabatan, Member, Object>,*/ Deactivate, Id, Schedule, Record {
    status: auditStatus;
    object: Object;
    anggota: Omit<Member, 'akses'>[];
    type: Type;
}
