import User from "./user";

export default class Create implements User {

    constructor(
        public id : number,
        public name            : string,
        public user            : string,
        public abbreviation    : string,
        public phone           : string,
        public email           : string,
        public nip             : string,
        public created         : string,
        public updated         : string,
        public deactivated     : string|null,
    ) {}
}