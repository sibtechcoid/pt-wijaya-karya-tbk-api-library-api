import CreateBody from "../../../../create/request/body/body";
import Deactivate from "../../../../../deactivate/read/request/body/body";

export default interface Where extends Partial<Omit<CreateBody,'anggota'|'user'>>, Deactivate {

}

// export default interface Body extends /*Baseaudit<Anggotatatus, auditStatus, Group, Jabatan, Member, Object>,*/ Deactivate, Id, Schedule, Record  {
//
//     status : auditStatus;
//     object : Object;
//     anggota : Omit<Member,'akses'>[]
//     type : Type;
//     //category : Category;
// }