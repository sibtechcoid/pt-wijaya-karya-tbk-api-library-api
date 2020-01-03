import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Project from "../../../../../qpass/audit/read/response/body/body";
import Fungsi from "../../../fungsi/read/response/body/body";
import Prosedur from "../../../prosedur/read/response/body/body";
import Klausul from "../../../klausul/read/response/body/body";
import ProsesBisnis from "../../../proses-bisnis/read/response/body/body";

export default interface Body extends  Record, Id  {

    project : Project;
    selesai  : Date|string;
    mulai  : Date|string;
    fungsi : Fungsi[];
    prosesBisnis : Omit<ProsesBisnis,'prosedur'>;
    klausul : Omit<Klausul,'auditProgram'>[];
    prosedur : Omit<Prosedur,'prosesBisnis'>[];
}