import NotNull from "@dikac/t-object/boolean/type";
import DeactivatedType from "../../../../../../deactivate/read/request/body/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Sort from "../../sort/sort";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import ModeType from "../../../../../../sort/mode/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        deactivate    : (v) => Undefinable(v, BooleanType),
        nama    : (v) => Undefinable(v, StringType),
        singkatan    : (v) => Undefinable(v, StringType),
        address    : (v) => Undefinable(v, StringType),
        business    : (v) => Undefinable(v, TypeNumber),
        level    : (v) => Undefinable(v, TypeNumber),
        type    : (v) => Undefinable(v, TypeNumber),
    };

    return Structure(value, sort);
}
