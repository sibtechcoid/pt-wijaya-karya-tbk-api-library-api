import Member from "../../../../member/create/request/body/body";
import Status from "../../../status/status";
import Type from "../../../type/type";
import Id from "../../../../../id/id";
import Schedule from "../../../../../schedule/update/request/body/body";
export default interface Body extends Id, Schedule {
    object?: number;
    members?: Omit<Member, 'id'>[];
    type?: Type;
    status?: Status;
}
