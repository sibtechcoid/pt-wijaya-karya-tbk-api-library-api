import TypeInterface from "../hasil";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";
import TypeNumber from "@dikac/t-number/boolean/type";
import TypeString from "@dikac/t-string/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        level: Positive,
        hasil : TypeNumber,
        catatan : TypeString,
        lampiran : (v) => ArrayOf(v, TypeString),
    };

    return Structure(value, sort);
}
