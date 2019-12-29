import User from "../../../read/response/body/body";
import ReadBody from "../../response/body/body";

export default function Null () : Omit<ReadBody,'extraAccess'|'access'|'position'> {

    return {
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
    }
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