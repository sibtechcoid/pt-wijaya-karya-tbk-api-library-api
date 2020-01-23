import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        audit : TypeNumber,

    };

    return Structure(value, sort);

}
