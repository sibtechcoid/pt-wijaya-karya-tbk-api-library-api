import Deactivate from "../../../../deactivate/read/request/body/body";
import Limit from "../../../../limit/limit";
import Sort from "../../../../sort/sort";
import CreateBody from "../../../create/request/body/body";
import Mode from "../../../../sort/mode/mode";

export default interface Body extends Deactivate, Limit, Sort<CreateBody> {

}

// let c : Body = {
//
//     limit :{
//         amount : 10,
//         page : 2
//     },
//     sort : {
//         name : Mode.ASC
//     }
//
// };