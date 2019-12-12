import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import Abbreviation from "../abbreviation";

export default function Type<Extended extends Abbreviation = Abbreviation>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.abbreviation !== null) {

        if(!IsString(value.abbreviation)) {

            return false;
        }
    }

    return true;
}
