import JabatanCreate from "../../../create/request/body/body";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import ReadBody from "../../../read/response/body/body";

export default interface Body extends Omit<ReadBody,'akses'> {

}