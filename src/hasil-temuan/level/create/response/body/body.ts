import ReadBody from "../../../read/response/body/body";
import AuditProgram from "../../../../../jadwal-rinci/audit-program/reads/response/body/body";

export default interface Body extends Omit<ReadBody,'auditProgram'> {

    auditProgram : Omit<AuditProgram,'level'>;
}