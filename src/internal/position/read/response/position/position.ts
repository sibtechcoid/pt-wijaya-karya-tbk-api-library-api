import UpdatePosition from "../../../update/request/body/body";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";


export default interface Position extends UpdatePosition, Id, Record {


}