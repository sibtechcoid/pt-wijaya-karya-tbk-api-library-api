import NotNull from "t-object/boolean/type";
import TypeName from "../../../../../../../name/update/boolean/type";
import TypeAbbreviation from "../../../../../../../abbreviation/update/boolean/type";
import Data from "../data";

export default function Type<Extended extends Data = Data>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeName(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }

    return true;
}
