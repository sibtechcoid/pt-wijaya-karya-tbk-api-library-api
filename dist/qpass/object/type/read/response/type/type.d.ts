import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
import Level from "../../../../level/read/response/body/body";
import Business from "../../../../business/read/response/body/body";
export default interface Type extends Deactivate, Record, Id, Name, Abbreviation {
    business: null | Omit<Business, 'type'>[];
    level: null | Omit<Level, 'type'>[];
}
