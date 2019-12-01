import PositionCreate from "../../../create/request/body/body";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
export default interface Body extends PositionCreate, Id, Record {
}
