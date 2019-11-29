import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Deactivated from "../../../../../../deactivated/deactivated";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";

export default interface Level extends Name, Abbreviation, Record, Id, Deactivated  {


}