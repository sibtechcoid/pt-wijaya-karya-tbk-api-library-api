import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Action from "../../../action/action";
import Access from "../../../../position/access/access";
import User from "../../../../../user/read/response/user/user";
import Position from "../../../../position/read/response/body/body";
import BaseMember from "../../../../../member/read/response/body/body";
import Group from "../../../../position/group/group";

export default interface Body extends BaseMember<Action, Access[], Group, Position> {


    //access : Access[],
}

// let data : Body = {
//     action: undefined,
//     actionDate: undefined,
//     created: "",
//     id: 0,
//     position: undefined,
//     updated: "",
//     user: undefined,
// };
