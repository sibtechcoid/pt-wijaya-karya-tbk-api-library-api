import TypeInterface from "../body";
import TypeName from "../../../../../../nama/create/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeName<Extended>(value)) {

        return false;
    }

    if(!TypeNumber(value.prosesBisnis)) {

        return false;
    }

    return true;
}
