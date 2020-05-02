import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import TypeNumber from "@dikac/t-number/boolean/type";

export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        dari: (v) => Undefinable(v, TypeNumber),
        untuk : (v) => Undefinable(v, TypeNumber),
        kuisioner: (v) => Undefinable(v, TypeNumber),
        nilai: (v) => Undefinable(v, TypeNumber),
        audit: (v) => Undefinable(v, TypeNumber),
    };

    return Structure(value, sort);
}
