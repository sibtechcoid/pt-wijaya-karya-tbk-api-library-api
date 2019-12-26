import TypeInterface from "../body";
import TypeNumber from "@dikac/t-number/boolean/finite";
import NotNull from "@dikac/t-object/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeNumber(value.position)) {

        return false;
    }

    if(!TypeNumber(value.user)) {

        return false;
    }

    return true;
}
