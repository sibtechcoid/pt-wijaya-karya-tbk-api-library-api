import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";
import ArrayOf from "@dikac/t-array/boolean/array-of";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        deactivate : (v) => Undefinable(v, BooleanType),
        audit : (v) => Undefinable(v, Positive),
        hasil    : (p) => Undefinable<number|null>(p, (p) : p is number|null => ArrayOf<number>(p, (p) : p is number => Positive(p))),
        level    : (p) => Undefinable<number|null>(p, (p) : p is number|null => ArrayOf<number>(p, (p) : p is number => Positive(p))),
        ruangan    : (p) => Undefinable<number|null>(p, (p) : p is number|null => ArrayOf<number>(p, (p) : p is number => Positive(p))),
        sampel    : (p) => Undefinable<number|null>(p, (p) : p is number|null => ArrayOf<number>(p, (p) : p is number => Positive(p))),
    };

    return Structure(value, sort);
}
