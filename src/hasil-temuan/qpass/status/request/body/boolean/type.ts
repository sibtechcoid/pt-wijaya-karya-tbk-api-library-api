import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import TypeEnum from "@dikac/t-enum/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import LevelType from "../../../../../level/type/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        audit : Positive,
        tipe : (v)=>TypeEnum(v, LevelType),

    };

    return Structure(value, sort);

}
