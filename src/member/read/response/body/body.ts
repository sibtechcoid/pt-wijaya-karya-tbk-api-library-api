import Record from "../../../../record/record";
import Id from "../../../../id/id";
// import Action from "../../create/request/action/action";
// import Access from "../../../position/access/access";
import User from "../../../../user/read/response/user/user";
import Position from "../../../../position/read/response/body/body";

export default interface Body<Status, Access, Group, P extends Omit<Position<any, Group>, 'access'>> extends Record, Id {
    status : Status;
    access : Access;
    position : P;
    // action : Action;
    statusDate : string|null;
    // project : Project,
    user : User

}

