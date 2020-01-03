import Deactivate from "../../../../deactivate/read/request/body/body";
import Limit from "../../../../limit/limit";
import Sort from "../../../../sort/sort";
import ReadBody from "../../../read/response/body/body";


export default interface Body extends Limit, Sort<Omit<ReadBody,'extraAkses'|'akses'|'jabatan'>> {

}

// let c : Body = {
//
//     limit :{
//         amount : 10,
//         page : 2
//     },
//     sort : {
//         nama : Mode.ASC
//     }
//
// };