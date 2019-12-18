import Member from "../../../../member/create/request/body/body";
import Schedule from "../../../../schedule/update/request/body/body";
import Id from "../../../../id/id";

export default interface Body<M extends Omit<Member, 'id'> = Omit<Member, 'id'>> extends Id, Schedule {

    object ?: number;
    members ?: M[];
}