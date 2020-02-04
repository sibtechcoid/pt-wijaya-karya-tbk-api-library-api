import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!IsString(value.nomer)) {

        return false;
    }

    if(!ArrayOf(value.audit, Positive)) {

        return false;
    }
    
    if(!ArrayOf(value.lampiran, IsString)) {

        return false;
    }


    return true;
}
