import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
import AuditProgram from "../../../../audit-program/reads/response/body/body";
import Type from "../../../type/type";

export default interface Body extends Deactivate, Record, Id, Nama  {

    auditProgram : AuditProgram;
    judul : boolean;
    nama : string;
    bobot : null|number;
    point : null|number;
    parent : Omit<Body,'judul'>;
}