import Validator from "./validator";
export default class Create<Type> implements Validator<Type> {
    private validator;
    constructor(validator: (value: any) => value is Type);
    validate(value: any): value is Type;
}
