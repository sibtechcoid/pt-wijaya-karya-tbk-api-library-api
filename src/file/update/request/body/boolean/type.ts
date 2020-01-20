import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import StringType from "@dikac/t-string/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!value.data) {

        return false;

    }

    if(!StringType(value.path)) {

        return false;

    }

    return true;
}
