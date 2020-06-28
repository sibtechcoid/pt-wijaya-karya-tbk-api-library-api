import TypeInterface from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import NotNull from "@dikac/t-object/boolean/type";
import Body from "../body";
import Positive from "@dikac/t-number/boolean/positive";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeNumber from "@dikac/t-number/boolean/type";
import TypeString from "@dikac/t-string/boolean/type";
import Nullable from "@dikac/t-null/boolean/nullable";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        level: Positive,
        audit: Positive,
        sampel: (v) => Nullable(v , Positive),
        ruangan: (v) => Nullable(v , Positive),
        hasil : TypeNumber,
        catatan : TypeString,
        lampiran : (v) => ArrayOf(v, TypeString),
    };

    return Structure(value, sort);
}
