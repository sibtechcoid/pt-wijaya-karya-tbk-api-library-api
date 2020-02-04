import TypeInterface from "../hasil";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeNumber from "@dikac/t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        level: TypeNumber,
        hasil : TypeNumber,
    };

    return Structure(value, sort);
}