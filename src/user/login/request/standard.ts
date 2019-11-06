import Request from './request';
import Login from "../login";
import StdLogin from "../standard";
import Method from "../../../method/method";
export default class Standard implements Request {

    public method : Method.POST = Method.POST;
    public path : '/user/login' = '/user/login';
    public body : Login;

    constructor(
         username : string,
         password : string
    ) {
        this.body = new StdLogin(username, password);
    }

}