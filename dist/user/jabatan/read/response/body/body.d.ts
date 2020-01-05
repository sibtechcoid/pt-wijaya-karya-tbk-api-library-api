import JabatanCreate from "../../../create/request/body/body";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Deactivate from "../../../../../deactivate/read/request/body/body";
export default interface Body extends JabatanCreate, Id, Record, Deactivate {
}
