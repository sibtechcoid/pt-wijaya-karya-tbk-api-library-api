import CreateUser from "../../../create/request/user/user";
import Record from "../../../../record/record";
import Deactivated from "../../../../deactivated/deactivated";
import Id from "../../../../id/id";

export default interface User extends CreateUser, Record, Deactivated, Id {


}