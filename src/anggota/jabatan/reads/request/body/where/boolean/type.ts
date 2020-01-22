import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import GroupType from "../../../../../group/boolean/type";

export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let where : Validator<Required<Where>> = {
        deactivate : (v) => Undefinable(v, BooleanType),
        nama        : (v) => Undefinable(v, StringType),
        singkatan    : (v) => Undefinable(v, StringType),
        group    : (v) => Undefinable(v, GroupType),
    };
    return Structure(value, where);
}
