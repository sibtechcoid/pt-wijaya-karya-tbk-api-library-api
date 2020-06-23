import TypeInterface from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import StringType from "@dikac/t-string/boolean/type";
import NotNull from "@dikac/t-object/boolean/type";
import Body from "../body";
import Positive from "@dikac/t-number/boolean/positive";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeNumber from "@dikac/t-number/boolean/type";
import TypeString from "@dikac/t-string/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        level: Positive,
        audit: Positive,
        sampel: Positive,
        ruangan: Positive,
        hasil : TypeNumber,
        catatan : TypeString,
        lampiran : (v) => ArrayOf(v, TypeString),
    };

    return Structure(value, sort);
}
