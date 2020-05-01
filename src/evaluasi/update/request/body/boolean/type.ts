import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import TypeNumber from "@dikac/t-number/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        id : (v) => Undefinable(v, Positive),
        nilai: (v) => Undefinable(v, TypeNumber),
    };

    return Structure(value, sort)
}
