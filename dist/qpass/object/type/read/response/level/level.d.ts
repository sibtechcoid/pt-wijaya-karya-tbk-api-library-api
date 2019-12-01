import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Body from "../../../../../../deactivate/read/response/body/body";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
export default interface Level extends Name, Abbreviation, Record, Id, Body {
}
