import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        //created    : (v) => Undefinable(v, ModeType),
        //auditProgram    : (v) => Undefinable(v, FiniteType),
        //parent    : (v) => Undefinable(v, FiniteType),
        deactivate : (v) => Undefinable(v, BooleanType),
        //judul : (v) => Undefinable(v, BooleanType),
       // id         : (v) => Undefinable(v, ModeType),
       // bobot    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => FiniteType(p))),
        //point    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => FiniteType(p))),
        nama    : (v) => Undefinable(v, StringType),
    };

    return Structure(value, sort);
}
