import TypeInterface from "../../../../skor/request/body/body";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeNumber from "@dikac/t-number/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let create : Validator<Required<TypeInterface>> = {
        user : TypeNumber,
        audit: TypeNumber,
    };

    return Structure(value, create);
}
