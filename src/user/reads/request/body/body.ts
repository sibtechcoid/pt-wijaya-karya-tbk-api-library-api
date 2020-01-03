import Deactivate from "../../../../deactivate/read/request/body/body";
import Limit from "../../../../limit/limit";
import BaseSort from "../../../../sort/sort";
import ReadsBody from "../../response/body/body";
import CreateBody from "../../../create/request/body/body";
import Sort from "./sort/sort";
import Where from "./where/where";


export default interface Body extends Limit {

    where ?: Where;
    sort ?: Sort;
}

// let c : Body = {
//
//     limit :{
//         amount : 10,
//         page : 2
//     },
//     sort : {
//         nama : Mode.ASC
//     },
//     where : {
//
//     }
//
// };