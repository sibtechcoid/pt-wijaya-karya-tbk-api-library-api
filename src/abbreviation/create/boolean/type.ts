import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import Abbreviation from "../abbreviation";
import IsNull from "@dikac/t-null/boolean/type";

export default function Type<Extended extends Abbreviation = Abbreviation>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!(IsString(value.abbreviation) || IsNull(value.abbreviation))) {

        return false;
    }

    return true;
}
