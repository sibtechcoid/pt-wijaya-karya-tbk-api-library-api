import Login from "./login";

export default class Standard implements Login{

    constructor(
        public username : string,
        public password : string,
    ) {

    }
}