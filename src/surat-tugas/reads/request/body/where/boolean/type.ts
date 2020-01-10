import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Finite from "@dikac/t-number/boolean/finite";
import IsString from "@dikac/t-string/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        nomer: (v) => Undefinable(v, IsString),
       // audit: (v) => Undefinable(v, (v) : v is number[] =>ArrayOf(v, Finite)),
        deactivate : (v) => Undefinable(v, BooleanType)
    };

    return Structure(value, sort);
}
