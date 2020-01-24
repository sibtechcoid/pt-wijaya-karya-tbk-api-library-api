import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Prosedur from "../../../../prosedur/read/response/body/body";
import Fungsi from "../../../../fungsi/read/response/body/body";
import ProsesBisnis from "../../../../proses-bisnis/read/response/body/body";
import Klausul from "../../../../klausul/read/response/body/body";
import Audit from "../../../../../audit/read/response/body/body";
import User from "../../../../../user/read/response/body/body";

export default interface Body extends Record, Id  {

    audit : Audit;
    selesai  : Date|string;
    mulai  : Date|string;

    fungsi : Fungsi[];
    prosedur : Omit<Prosedur,'prosesBisnis'>[];
    prosesBisnis : Omit<ProsesBisnis,'prosedur'>;
    klausul : Omit<Klausul,'auditProgram'>[];
    auditor : Omit<User,'extraAkses'|'akses'|'jabatan'>[];

}