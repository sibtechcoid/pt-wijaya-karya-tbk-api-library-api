import Object from "../../../../unit-kerja/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import auditStatus from "../../../status/status";
import Type from "../../../type/type";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Id from "../../../../../id/id";
import Schedule from "../../../../../schedule/read/response/body/body";
import Record from "../../../../../record/record";

export default interface Body extends /*Baseaudit<MemberStatus, auditStatus, Group, Position, Member, Object>,*/ Deactivate, Id, Schedule, Record  {

    status : auditStatus;
    object : Object;
    members : Omit<Member,'access'>[]
    type : Type;
    //category : Category;
}