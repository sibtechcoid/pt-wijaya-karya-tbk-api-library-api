import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
import AuditProgram from "../../../../../jadwal-rinci/audit-program/reads/response/body/body";

export default interface Body extends Deactivate, Record, Id, Nama  {

    auditProgram : AuditProgram;
    judul : boolean;
    nama : string;
    bobot : null|number;
    point : null|number;
    parent: Omit<Body, 'judul'|'auditProgram'>|null;
}