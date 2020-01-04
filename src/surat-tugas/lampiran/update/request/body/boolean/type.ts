import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeId(value)) {

        return false;
    }

    if(value.surat !== undefined) {

        if(!IsNumber(parseInt(value.surat.toString()))) {

            return false;
        }
    }

    return true;
}
