import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import Abbreviation from "../abbreviation";
import IsNull from "t-null/boolean/type";

export default function Type<Extended extends Abbreviation = Abbreviation>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!(IsString(value.abbreviation) || IsNull(value.abbreviation))) {

        return false;
    }

    return true;
}
