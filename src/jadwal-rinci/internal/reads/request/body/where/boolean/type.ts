import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Compatible from "@dikac/t-date/boolean/compatible";
import Positive from "@dikac/t-number/boolean/positive";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        mulai: (v) => Undefinable(v, Compatible),
        audit: (v) => Undefinable(v, Positive),
        selesai: (v) => Undefinable(v, Compatible),
        deactivate : (v) => Undefinable(v, BooleanType)
    };

    return Structure(value, sort);
}
