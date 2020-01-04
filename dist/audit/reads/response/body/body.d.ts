import UnitKerja from "../../../../unit-kerja/read/response/body/body";
import Member from "../../../../anggota/read/response/body/body";
import AuditStatus from "../../../status/status";
import Type from "../../../type/type";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Schedule from "../../../../jadwal/read/response/body/body";
import Record from "../../../../record/record";
export default interface Body extends /*Baseaudit<Anggotatatus, auditStatus, Group, Jabatan, Member, Object>,*/ Deactivate, Id, Schedule, Record {
    status: AuditStatus;
    unitKerja: UnitKerja;
    anggota: Omit<Member, 'akses'>[];
    tipe: Type;
}
