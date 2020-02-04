import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        audit : TypeNumber,
        selesai : TypeDateCompatible,
        mulai : TypeDateCompatible,
        fungsi : (v) => ArrayOf(v, Positive),
        prosedur : (v) => ArrayOf(v, Positive),
        prosesBisnis : TypeNumber,
        klausul : (v) => ArrayOf(v, Positive),
        auditor : (v) => ArrayOf(v, Positive),

    };

    return Structure(value, sort);

}
