import TypeInterface from "../hasil";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeNumber from "@dikac/t-number/boolean/finite";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeString from "@dikac/t-string/boolean/type";
import undefinable from "@dikac/t-undefined/boolean/undefinable";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        level: TypeNumber,
        audit: TypeNumber,
        hasil : TypeNumber,
    };

    return Structure(value, sort);
}