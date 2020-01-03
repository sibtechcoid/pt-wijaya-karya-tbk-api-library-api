import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
import AuditProgram from "../../../../audit-program/read/response/body/body";

export default interface Body extends Deactivate, Record, Id, Nama  {

    auditProgram : Omit<AuditProgram,'klausul'>;
}