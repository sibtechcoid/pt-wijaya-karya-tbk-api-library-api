import Member from "../../../../member/create/request/body/body";
import Status from "../../../../../qpass/project/status/status";
import Type from "../../../type/type";
import Schedule from "../../../../../schedule/create/request/body/body";
export default interface Body extends /*Project<Member>,*/ Schedule {
    object: number;
    members: Member[];
    status: Status;
    type: Type;
}
