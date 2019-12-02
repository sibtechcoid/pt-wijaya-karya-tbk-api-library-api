import Status from "../../../status/status";
import Object from "../../../../object/read/response/object/object";
import Position from "../../../../position/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import BaseProject from "../../../../../project/read/response/body/body";

export default interface Project extends BaseProject<Position, Member, Object>  {

    status : Status;
}