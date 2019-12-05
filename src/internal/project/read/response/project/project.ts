import Status from "../../../status/status";
import Object from "../../../../object/read/response/object/object";
import Position from "../../../../position/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import BaseProject from "../../../../../project/read/response/body/body";
import Group from "../../../../position/group/group";
import Action from "../../../../member/action/action";
import Type from "../../../../../internal/object/type/read/response/body/body";
import Business from "../../../../../internal/object/business/read/response/body/body";
import Category from "../../../category/category";

export default interface Project extends BaseProject<Action, Status, Group, Position, Member, Object>  {

    category : Category;
    //status : Status;
}