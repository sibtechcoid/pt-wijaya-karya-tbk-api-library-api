import CreateBody from "../../../../create/request/body/body";
import Deactivate from "../../../../../../deactivate/read/request/body/body";

export default interface Where extends Partial<Omit<CreateBody,'members'|'user'>>, Deactivate {

}

// export default interface Body extends /*Baseaudit<MemberStatus, auditStatus, Group, Position, Member, Object>,*/ Deactivate, Id, Schedule, Record  {
//
//     status : auditStatus;
//     object : Object;
//     members : Omit<Member,'access'>[]
//     type : Type;
//     //category : Category;
// }