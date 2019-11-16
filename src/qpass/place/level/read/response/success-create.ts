import Success from "./sucess";
import BaseSuccessCreate from "../../../../../response/success-create";
import Type from "./level/level";

export default class SuccessCreate extends BaseSuccessCreate<Type[]> implements Success {

    constructor(body : Type[]) {
        super(body);
    }
}