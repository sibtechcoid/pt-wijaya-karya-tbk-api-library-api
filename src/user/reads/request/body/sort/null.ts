import User from "../../../../read/response/body/body";
import ReadBody from "../../../response/body/body";
import {Sort} from "../body";

export default function Null () : (keyof Sort)[] {

    let temp : Sort  =  {
        id           : 0,
        name         : '',
        user         : '',
        abbreviation : '',
        phone        : null,
        email        : null,
        nip          : null,
        active       : true,
        positionWika : null,
        parentId     : null,
        created      : '',
        updated      : '',
        deactivate   : '',
    };

    return <(keyof Sort)[]>Object.keys(temp);
}




// class Create implements User {
//
//     constructor(
//        public name : string,
//        public user : string,
//        public abbreviation : string,
//        public phone : string,
//        public email : string,
//        public nip : string
//     ) {}
// }