import Sort from "./sort";

export default function Null () : (keyof Sort)[] {

    let temp : {[Key in keyof Sort] : any}  =  {
        id           : null,
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
//        public telepon : string,
//        public email : string,
//        public nip : string
//     ) {}
// }