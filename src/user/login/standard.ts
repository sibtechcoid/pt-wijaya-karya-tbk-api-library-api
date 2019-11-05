import Login from "./login";

export default class Standard implements Login{

    constructor(
        readonly username : string,
        readonly password : string,
    ) {

    }
}