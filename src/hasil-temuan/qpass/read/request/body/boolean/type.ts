import TypeInterface from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    if(!TypeNumber(value.audit)) {

        return false;
    }

    return true;
}
