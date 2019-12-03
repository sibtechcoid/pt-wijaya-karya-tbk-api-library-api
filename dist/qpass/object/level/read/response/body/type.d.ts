import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
export default interface Body extends Deactivate, Record, Id, Name, Abbreviation {
}
