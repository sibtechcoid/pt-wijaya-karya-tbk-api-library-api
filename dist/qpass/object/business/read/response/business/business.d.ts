import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Body from "../../../../../../deactivate/read/response/body/body";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
export default interface Business extends Id, Record, Body, Name, Abbreviation {
}
