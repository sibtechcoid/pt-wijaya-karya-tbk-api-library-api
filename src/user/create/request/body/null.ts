import User from "./body";

export default function Null () : User {

    return {
        name         : '',
        password     : '',
        user         : '',
        abbreviation : '',
        phone        : null,
        email        : null,
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