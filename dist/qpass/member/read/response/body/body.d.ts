import Status from "../../../status/status";
import Position from "../../../../position/read/response/body/body";
import BaseMember from "../../../../../member/read/response/body/body";
import Group from "../../../../position/group/group";
import Access from "../../../../access/create/request/body/body";
export default interface Body extends BaseMember<Status, Access, Group, Position> {
}
