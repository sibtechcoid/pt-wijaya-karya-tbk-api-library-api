import Success from "./sucess";
import BaseSuccessCreate from "../../../../response/success-create";
import Body from "./body/body";

export default class SuccessCreate extends BaseSuccessCreate<Body[]> implements Success {

    constructor(body : Body[]) {
        super(body);
    }
}