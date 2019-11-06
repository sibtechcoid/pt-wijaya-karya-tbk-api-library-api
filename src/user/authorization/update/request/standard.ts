import Request from './request';
import StdUpdate from "../standard";
import Update from "../update";
import Qpass from "../type/qpass";
import Internal from "../type/internal";
import Method from "../../../../method/method";

export default class Standard implements Request {

    readonly method : Method.POST = Method.POST;
    readonly path : '/user/authorization/update' = '/user/authorization/update';
    readonly body : Update;

    constructor(
        readonly qpass : Qpass[],
        readonly internal : Internal[]
    ) {
        this.body = new StdUpdate(qpass, internal);
    }

}