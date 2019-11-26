import Access from "../../../../access/update/request/access/access";
import PositionCreate from "../../../create/request/position/position";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";

export default interface Position extends PositionCreate, Id, Record {

    access : Access
}