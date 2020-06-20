import TypeInterface from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import StringType from "@dikac/t-string/boolean/type";
import NotNull from "@dikac/t-object/boolean/type";
import Body from "../body";
import Positive from "@dikac/t-number/boolean/positive";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        nama : StringType,
        level : (v) => ArrayOf(v, Positive),
    };

    return Structure(value, sort);
}
