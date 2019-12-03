import Status from "../../../status/status";
import Object from "../../../../object/read/response/object/object";
import Position from "../../../../position/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import BaseProject from "../../../../../project/read/response/body/body";
import Group from "../../../../position/group/group";
import Action from "../../../../member/action/action";

export default interface Project extends BaseProject<Action, Status, Group, Position, Member, Object>  {

    //status : Status;
}