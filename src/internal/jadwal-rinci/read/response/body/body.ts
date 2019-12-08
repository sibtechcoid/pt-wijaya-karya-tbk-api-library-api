import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Project from "../../../../project/read/response/project/project";
import Fungsi from "../../../fungsi/read/response/body/body";
import Prosedur from "../../../prosedur/read/response/body/body";
import Klausul from "../../../klausul/read/response/body/body";
import ProsesBisnis from "../../../proses-bisnis/read/response/body/body";

export default interface Body extends Deactivate, Record, Id  {

    project : Project;
    selesai  : Date|string;
    mulai  : Date|string;
    fungsi : Fungsi[];
    prosesBisnis : ProsesBisnis;
    klausul : Prosedur[];
    prosedur : Klausul[];
}