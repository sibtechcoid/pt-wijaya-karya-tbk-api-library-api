import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Action from "../../../create/request/action/action";
import Access from "../../../../position/create/request/access/access";
import User from "../../../../../user/read/response/user/user";
export default interface Member extends Record, Id {
    position: Position;
    action: Action;
    actionDate: string | null;
    access: Access[];
    user: User;
}
