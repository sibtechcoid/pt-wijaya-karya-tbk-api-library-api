import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Name from "../../../../../../name/create/name";
import AuditProgram from "../../../../audit-program/read/response/body/body";
import Type from "../../../type/type";
export default interface Body extends Deactivate, Record, Id, Name {
    auditProgram: AuditProgram;
    name: string;
    bobot: number;
    point: number;
    tipe: Type;
}
