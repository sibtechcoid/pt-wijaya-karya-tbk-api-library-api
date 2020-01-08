import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Infinite from "@dikac/t-number/boolean/infinite";
import Compatible from "@dikac/t-date/boolean/compatible";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        mulai: (v) => Undefinable(v, Compatible),
        project: (v) => Undefinable(v, Infinite),
        selesai: (v) => Undefinable(v, Compatible),
        deactivate : (v) => Undefinable(v, BooleanType)
    };

    return Structure(value, sort);
}
