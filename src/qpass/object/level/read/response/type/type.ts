import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Deactivated from "../../../../../../deactivated/deactivated";

export default interface Type extends Deactivated, Record, Id {

    name : string;
    abbreviation : string;

}