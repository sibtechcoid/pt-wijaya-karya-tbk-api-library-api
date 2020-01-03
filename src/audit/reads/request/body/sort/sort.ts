import ReadsBody from "../../../response/body/body";
import BaseSort from "../../../../../sort/sort";
import Mode from "../../../../../sort/mode/mode";

export default interface Sort extends BaseSort<Omit<ReadsBody,'status'|'unitKerja'|'anggota'|'jenisUnit'|'rencana'|'realisasi'>> {

    rencana ?: [Mode, Mode];
    realisasi ?: [Mode, Mode];
}

// Deactivate, Id, Schedule, Record  {
//
//     status : auditStatus;
//     object : Object;
//     anggota : Omit<Member,'akses'>[]
//     type : Type;
//     //category : Category;
// }
