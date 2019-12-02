import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Deactivate from "../../../../../../deactivate/read/response/body/body";

export default interface Body extends Id, Record, Deactivate {

    name : string,
    abbreviation : string,
}