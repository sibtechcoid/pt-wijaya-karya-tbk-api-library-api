import ProjectStatus from "../../../status/status";
import Object from "../../../../object/read/response/object/object";
import Position from "../../../../position/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import BaseProject from "../../../../../project/read/response/body/body";
import Group from "../../../../position/group/group";
import MemberStatus from "../../../../member/status/status";
import Category from "../../../category/category";

export default interface Project extends BaseProject<MemberStatus, ProjectStatus, Group, Position, Member, Object>  {

    category : Category;
    //status : Status;
}