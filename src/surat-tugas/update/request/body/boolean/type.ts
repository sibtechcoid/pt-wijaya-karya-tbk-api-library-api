import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import TypeId from "../../../../../id/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeId(value)) {

        return false;
    }

    if(value.nomer !== undefined) {

        if(!IsString(value.nomer)) {

            return false;
        }
    }

    if(value.project !== undefined) {

        if(!ArrayOf(value.project, IsNumber)) {

            return false;
        }
    }

    return true;
}
