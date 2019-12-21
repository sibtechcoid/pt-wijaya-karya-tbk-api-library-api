import Login from "./login";


export default class Create implements Login{

    constructor(
        public username : string,
        public password : string,
    ) {

    }
}