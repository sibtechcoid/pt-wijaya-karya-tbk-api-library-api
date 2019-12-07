import Status from "../../../status/status";
import Access from "../../../../position/access/access";
import Position from "../../../../position/read/response/body/body";
import BaseMember from "../../../../../member/read/response/body/body";
import Group from "../../../../position/group/group";
export default interface Body extends BaseMember<Status, Access[], Group, Position> {
}
