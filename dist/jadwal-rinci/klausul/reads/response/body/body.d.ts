import ReadBody from "../../../read/response/body/body";
import AuditProgram from "../../../../audit-program/reads/response/body/body";
export default interface Body extends Omit<ReadBody, 'auditProgram'> {
    auditProgram: Omit<AuditProgram, 'klausul' | 'level'>;
}
