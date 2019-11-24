import MemberCreate from "../../../create/request/member/member";
import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";
import Id from "../../../../../id/id";
export default interface Member extends MemberCreate, Record, Deactivated, Id {
}
