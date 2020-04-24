import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Positive from "@dikac/t-number/boolean/positive";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeNumber from "@dikac/t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        dari : TypeDateCompatible,
        sampai : TypeDateCompatible,
    };

    return Structure(value, sort);
}

