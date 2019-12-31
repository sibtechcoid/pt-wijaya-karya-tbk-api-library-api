import User from "../../../../read/response/body/body";
import ReadBody from "../../../response/body/body";
import Sort from "./sort";

export default function Null () : (keyof Sort)[] {

    let temp : {[Key in keyof Sort] : any}  =  {
        id           : null,
        name         : null,
        user         : null,
        abbreviation : null,
        phone        : null,
        email        : null,
        nip          : null,
        active       : null,
        positionWika : null,
        parentId     : null,
        created      : null,
        updated      : null,
        deactivate   : null,
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