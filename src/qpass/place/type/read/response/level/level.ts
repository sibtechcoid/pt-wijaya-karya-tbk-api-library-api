import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Deactivated from "../../../../../../deactivated/deactivated";

export default interface Level extends Record, Id, Deactivated  {

    name : string,
    abbreviation : string,
}