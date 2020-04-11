import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import EnumType from "@dikac/t-enum/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import TypeType from "../../../../../type/type";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        deactivate    : (v) => Undefinable(v, BooleanType),
        nama    : (v) => Undefinable(v, StringType),
        singkatan    : (v) => Undefinable(v, StringType),
    };

    return Structure(value, sort);
}
