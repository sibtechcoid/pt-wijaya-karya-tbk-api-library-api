import Member from "../../../../member/create/request/body/body";
import Project from "../../../../../project/create/request/body/body";
import Status from "../../../../../qpass/project/status/status";
export default interface Body extends Project<Member> {
    status: Status;
}
