import TypeInterface from "../../body/body";
import NotNull from "t-object/boolean/type";
import TypeNumber from "t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeNumber(value.project)) {

        return false;
    }

    return true;
}
