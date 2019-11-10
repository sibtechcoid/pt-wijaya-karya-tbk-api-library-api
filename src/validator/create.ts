import Validator from "./validator";

export default class Create<Type> implements Validator<Type> {

    constructor(
        private validator : (value : any) => value is Type
    ) {

    }

    validate(value : any) : value is Type {

        return this.validator(value);
    }
}