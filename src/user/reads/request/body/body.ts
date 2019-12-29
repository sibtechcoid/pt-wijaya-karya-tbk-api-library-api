import Deactivate from "../../../../deactivate/read/request/body/body";
import Limit from "../../../../limit/limit";
import BaseSort from "../../../../sort/sort";
import ReadsBody from "../../response/body/body";
import CreateBody from "../../../create/request/body/body";

export interface Where extends Partial<Omit<CreateBody,'password'|'user'>>, Deactivate {}

export interface Sort extends Omit<ReadsBody,'extraAccess'|'access'|'position'|'password'> {}

export default interface Body extends Limit, BaseSort<Sort> {

    where ?: Where;
}

// let c : Body = {
//
//     limit :{
//         amount : 10,
//         page : 2
//     },
//     sort : {
//         name : Mode.ASC
//     },
//     where : {
//
//     }
//
// };