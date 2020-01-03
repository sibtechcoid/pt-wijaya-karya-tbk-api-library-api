import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
import Type from "../../../../jenis-unit/reads/response/body/body";

export default interface Body extends Deactivate, Record, Id, Name, Abbreviation {

    // tobe deprecated
    //jenisUsaha : Omit<Business,'level'>;

    type : Omit<Type,'business'|'level'>
}