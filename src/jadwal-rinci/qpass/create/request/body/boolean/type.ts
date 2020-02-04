import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let create : Validator<Required<TypeInterface>> = {
        auditor : (v) => ArrayOf(v, Positive),
        audit : Positive,
        level : Positive,
        selesai : TypeDateCompatible,
        mulai : TypeDateCompatible,
        fungsi : (v) => ArrayOf(v, Positive)
    };

    return Structure(value, create);
}