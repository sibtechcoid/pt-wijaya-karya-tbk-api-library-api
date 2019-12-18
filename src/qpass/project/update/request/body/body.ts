import Member from "../../../../../member/create/request/body/body";
import Status from "../../../status/status";
import TypeInterface from "../../../../../project/update/request/body/body";

export default interface Body extends TypeInterface<Member> {

    status ? : Status;
}