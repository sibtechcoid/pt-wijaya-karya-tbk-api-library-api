import TypeInterface from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    if(!Positive(value.audit)) {

        return false;
    }

    return true;
}
