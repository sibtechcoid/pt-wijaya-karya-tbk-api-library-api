import Object from "../../../../object/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import BaseProject from "../../../../../project/read/response/body/body";
import Position from "../../../../../qpass/position/read/response/body/body";
import Group from "../../../../position/group/group";
import ProjectStatus from "../../../status/status";
import MemberStatus from "../../../../member/status/status";

export default interface Body extends BaseProject<MemberStatus, ProjectStatus, Group, Position, Member, Object>  {

    //category : Category;
}