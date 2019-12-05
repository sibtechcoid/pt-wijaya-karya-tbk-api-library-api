import Object from "../../../../object/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import BaseProject from "../../../../../project/read/response/body/body";
import Position from "../../../../../qpass/position/read/response/body/body";
import Group from "../../../../position/group/group";
import Status from "../../../status/status";
import Action from "../../../../member/action/action";
import Category from "../../../../../internal/project/category/category";

export default interface Body extends BaseProject<Action, Status, Group, Position, Member, Object>  {

    //category : Category;
}