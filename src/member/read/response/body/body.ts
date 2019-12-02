import Record from "../../../../record/record";
import Id from "../../../../id/id";
// import Action from "../../create/request/action/action";
// import Access from "../../../position/access/access";
import User from "../../../../user/read/response/user/user";
import Position from "../../../../position/read/response/body/body";
import Project from "../../../../project/read/response/body/body";

export default interface Body<Access, P extends Omit<Position<any>, 'access'>> extends Record, Id {

    access : Access;
    position : P;
    // action : Action;
    // actionDate : string|null;
    // project : Project,
    user : User
}

