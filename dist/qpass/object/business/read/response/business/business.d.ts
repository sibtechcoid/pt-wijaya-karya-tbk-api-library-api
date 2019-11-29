import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Deactivated from "../../../../../../deactivated/deactivated";
import Name from "../../../../../../name/name";
import Abbreviation from "../../../../../../abbreviation/abbreviation";
export default interface Business extends Id, Record, Deactivated, Name, Abbreviation {
}
