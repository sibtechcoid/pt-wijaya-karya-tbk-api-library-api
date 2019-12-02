import Object from "../../../../object/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import BaseProject from "../../../../../project/read/response/body/body";
import Position from "../../../../../qpass/position/read/response/body/body";
export default interface Project extends BaseProject<Position, Member, Object> {
}
