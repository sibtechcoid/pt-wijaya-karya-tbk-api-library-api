import Id from "../../../../../../id/id";
import Record from "../../../../../../record/record";
import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
import Business from "../../../../business/read/response/body/body";
export default interface Body extends Id, Record, Deactivate, Name, Abbreviation {
    business: Omit<Business, 'type'>[];
}
