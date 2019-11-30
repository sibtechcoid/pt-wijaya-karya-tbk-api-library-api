import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Body from "../../../../../../deactivate/read/response/body/body";

export default interface Business extends Id, Record, Body {

    name : string,
    abbreviation : string,
}