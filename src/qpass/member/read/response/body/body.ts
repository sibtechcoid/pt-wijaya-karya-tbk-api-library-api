import Action from "../../../action/action";
import Access from "../../../../position/access/access";
import Position from "../../../../position/read/response/body/body";
import BaseMember from "../../../../../member/read/response/body/body";
import Group from "../../../../position/group/group";
import Status from "../../../../project/status/status";

export default interface Body extends BaseMember<Action, Access[], Group, Position> {

   // action : Action;
   // actionDate : string|null;
}

