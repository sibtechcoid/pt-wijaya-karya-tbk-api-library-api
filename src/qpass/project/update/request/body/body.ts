import Member from "../../../../../member/create/request/body/body";
import Status from "../../../status/status";
import TypeInterface from "../../../../../project/update/request/body/body";
import Type from "../../../type/type";

export default interface Body extends TypeInterface<Member> {

    type ? : Type;
    status ? : Status;
}