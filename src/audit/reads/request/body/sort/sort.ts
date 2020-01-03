import ReadsBody from "../../../response/body/body";
import BaseSort from "../../../../../sort/sort";
import Mode from "../../../../../sort/mode/mode";

export default interface Sort extends BaseSort<Omit<ReadsBody,'status'|'object'|'anggota'|'type'|'rencana'|'realisasi'>> {

    plan ?: [Mode, Mode];
    realize ?: [Mode, Mode];
}

// Deactivate, Id, Schedule, Record  {
//
//     status : auditStatus;
//     object : Object;
//     anggota : Omit<Member,'akses'>[]
//     type : Type;
//     //category : Category;
// }
