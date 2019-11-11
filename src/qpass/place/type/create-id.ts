import Type from "./type";
import Create from "./create";
import Id from "../../../id/id";

export default function CreateId(type : Type, id : Id) : Type & Id {

    return Object.assign(type, id);
}
//
//
// export default class CreateId extends Create implements Id {
//
//     constructor(
//        name : string,
//        abbreviation : string,
//        public id : number,
//     ) {
//         super(name, abbreviation);
//     }
// }