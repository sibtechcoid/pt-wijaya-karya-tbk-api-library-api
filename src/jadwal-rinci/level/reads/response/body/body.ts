import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
import AuditProgram from "../../../../audit-program/reads/response/body/body";
import ReadBody from "../../../read/response/body/body";

export default interface Body extends Omit<ReadBody, 'auditProgram'|'parent'> {

}