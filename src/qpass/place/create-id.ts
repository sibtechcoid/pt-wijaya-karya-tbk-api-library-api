import Place from "./place";
import Id from "../../id/id";

export default function CreateId(place : Place, id : Id) : Place & Id {

    return Object.assign(place, id);
}

// export default class CreateId extends Create implements Id {
//
//     constructor(
//         name : string,
//         abbreviation : string,
//         address : string,
//         type: number,
//         level: number,
//        public id: number,
//     ) {
//         super(name, abbreviation, address, type, level);
//     }
// }