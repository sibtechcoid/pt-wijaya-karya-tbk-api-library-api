import Member from "../../../../member/create/request/body/body";
import Project from "../../../../../project/create/request/body/body";
export default interface Body extends Project<Member> {
}
