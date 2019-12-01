import Route from "./route";
import Path from "../path/path";
import Validator from "../validator/create";
import Method from "../method/method";
import Type from "../method/type/type";

export default function Create<T extends Type, P extends string, B>(
    method : Method<T>,
    path : Path<P>,
    validator : (value:any) => value is B
) : Route<T, P, B> {

    let validator_ = new Validator<B>(validator);

    let merged =  Object.assign(method, path, validator_);
    merged.validate = validator_.validate;

    return merged;
}
