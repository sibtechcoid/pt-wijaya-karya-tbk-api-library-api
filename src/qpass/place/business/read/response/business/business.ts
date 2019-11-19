import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Deactivated from "../../../../../../deactivated/deactivated";

export default interface Business extends Id, Record, Deactivated {

    name : string,
    abbreviation : string,
}