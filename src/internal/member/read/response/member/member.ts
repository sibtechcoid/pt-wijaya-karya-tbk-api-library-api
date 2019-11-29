import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Action from "../../../create/request/action/action";
import Access from "../../../../position/access/access";
import User from "../../../../../user/read/response/user/user";
import Body from "../../../../position/read/response/body/body";


export default interface Member extends Record, Id {

    position : Body;
    action : Action;
    actionDate : string|null;
    access : Access[],
    user : User
}

