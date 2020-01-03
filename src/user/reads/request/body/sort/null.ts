import User from "../../../../read/response/body/body";
import ReadBody from "../../../response/body/body";
import Sort from "./sort";

export default function Null () : (keyof Sort)[] {

    let temp : {[Key in keyof Sort] : any}  =  {
        id           : null,
        nama         : null,
        user         : null,
        singkatan : null,
        telepon        : null,
        email        : null,
        nip          : null,
        aktif       : null,
        jabatanWika : null,
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
//        public nama : string,
//        public user : string,
//        public singkatan : string,
//        public phone : string,
//        public email : string,
//        public nip : string
//     ) {}
// }