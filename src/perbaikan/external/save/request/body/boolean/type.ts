import Body from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeInterface from "../body";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import TypeObject from "@dikac/t-object/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    let update : Validator<Required<TypeInterface>> = {
        id: (v) => Undefinable(v, Positive),
        audit: (v) => Undefinable(v, Positive),
       // ditutup : (v) => Undefinable(v, BooleanType),
       // catatan : (v) => Undefinable(v, StringType),
    };

    return Structure(value, update);
}
