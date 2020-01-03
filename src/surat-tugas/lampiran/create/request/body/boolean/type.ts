import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.surat === undefined) {

        return false;

    } else {

        if(!IsNumber(parseInt(value.surat.toString()))) {

            return false;
        }
    }

    return true;
}
