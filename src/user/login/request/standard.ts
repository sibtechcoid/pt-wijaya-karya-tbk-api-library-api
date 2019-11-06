import Request from './request';
import Login from "../login";
import StdLogin from "../standard";
import Method from "../../../method/method";
export default class Standard implements Request {

    readonly method : Method.POST = Method.POST;
    readonly path : '/user/login' = '/user/login';
    readonly body : Login;

    constructor(
         username : string,
         password : string
    ) {
        this.body = new StdLogin(username, password);
    }

}