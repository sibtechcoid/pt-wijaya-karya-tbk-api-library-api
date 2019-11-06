import Request from './request';
import StdUpdate from "../standard";
import Update from "../update";
import Qpass from "../type/qpass";
import Internal from "../type/internal";
import Method from "../../../../method/method";

export default class Standard implements Request {

    public method : Method.POST = Method.POST;
    public path : '/user/authorization/update' = '/user/authorization/update';
    public body : Update;

    constructor(
        public qpass : Qpass[],
        public internal : Internal[]
    ) {
        this.body = new StdUpdate(qpass, internal);
    }

}