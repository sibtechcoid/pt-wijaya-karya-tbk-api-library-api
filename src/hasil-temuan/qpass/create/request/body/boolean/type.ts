import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let create : Validator<Required<TypeInterface>> = {
        auditor : (v) => ArrayOf(v, TypeNumber),
        audit : TypeNumber,
        level : TypeNumber,
        selesai : TypeDateCompatible,
        mulai : TypeDateCompatible,
        fungsi : (v) => ArrayOf(v, TypeNumber)
    };

    return Structure(value, create);
}