import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
import Type from "../../../../jenis-unit/reads/response/body/body";
export default interface Body extends Id, Record, Deactivate, Name, Abbreviation {
    type: Omit<Type, 'business' | 'level'>;
}