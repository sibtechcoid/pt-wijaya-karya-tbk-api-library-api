import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import NumberType from "@dikac/t-number/boolean/finite";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        //created    : (v) => Undefinable(v, ModeType),
        deactivate : (v) => Undefinable(v, BooleanType),
       // id         : (v) => Undefinable(v, ModeType),
       // updated    : (v) => Undefinable(v, ModeType),
        nama    : (v) => Undefinable(v, StringType),
        singkatan    : (v) => Undefinable(v, StringType),
        jenisUnit    : (v) => Undefinable(v, NumberType),
    };

    return Structure(value, sort);
}
