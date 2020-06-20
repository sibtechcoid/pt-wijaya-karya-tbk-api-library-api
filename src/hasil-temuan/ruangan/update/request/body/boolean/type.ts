import Body from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import StringType from "@dikac/t-string/boolean/type";
import TypeObject from "@dikac/t-object/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        id    : Positive,
        level    : (p) => Undefinable<number|null>(p, (p) : p is number|null => ArrayOf<number>(p, (p) : p is number => Positive(p))),
        nama    : (v) => Undefinable(v, StringType),
    };

    return Structure(value, sort);
}
