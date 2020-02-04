import TypeInterface from "../body";
import TypeName from "../../../../../../nama/create/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeName<Extended>(value)) {

        return false;
    }

    if(!Positive(value.prosesBisnis)) {

        return false;
    }

    return true;
}
