import TypeInterface from "../data";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import Data from "../../../../../../../qpass/place/level/create/request/data/data";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!IsString(value.name)) {

        return false;
    }

    if(!IsString(value.abbreviation)) {

        return false;
    }

    return true;
}
