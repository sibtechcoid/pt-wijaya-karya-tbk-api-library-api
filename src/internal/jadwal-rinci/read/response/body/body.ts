import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Name from "../../../../../name/create/name";

export default interface Body extends Deactivate, Record, Id  {

    // TODO FIX ALL FIELD
    // SHOULD BE OBJECT

    project : number;
    selesai  : Date|string;
    mulai  : Date|string;
    fungsi : number[];
    prosesBisnis : number;
    klausul : number[];
    prosedur : number[];
}