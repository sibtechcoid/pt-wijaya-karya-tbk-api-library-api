import Object from "../../../../object/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import BaseProject from "../../../../../project/read/response/body/body";
import Position from "../../../../../qpass/position/read/response/body/body";
import Group from "../../../../position/group/group";
export default interface Project extends BaseProject<Group, Position, Member, Object> {
}
