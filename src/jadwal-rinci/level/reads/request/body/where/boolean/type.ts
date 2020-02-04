import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Nullable from "@dikac/t-null/boolean/nullable";
import Positive from "@dikac/t-number/boolean/positive";

export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        levelUsaha    : (v) => Undefinable(v, Positive),
        parent    : (v) => Undefinable(v, Positive),
        deactivate : (v) => Undefinable(v, BooleanType),
        judul : (v) => Undefinable(v, BooleanType),
        bobot    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => Positive(p))),
        point    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => Positive(p))),
        nama    : (v) => Undefinable(v, StringType),
    };

    return Structure(value, sort);
}
