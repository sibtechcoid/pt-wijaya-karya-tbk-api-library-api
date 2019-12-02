import Member from "../../../../member/create/request/body/body";
import Schedule from "../../../../schedule/create/request/body/body";

export default interface Body<M extends Member = Member> extends Schedule {

    object : number;
    members : M[];
}