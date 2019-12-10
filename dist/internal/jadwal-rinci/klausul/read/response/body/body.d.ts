import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Name from "../../../../../../name/create/name";
import AuditProgram from "../../../../audit-program/read/response/body/body";
export default interface Body extends Deactivate, Record, Id, Name {
    auditProgram: Omit<AuditProgram, 'klausul'>;
}
