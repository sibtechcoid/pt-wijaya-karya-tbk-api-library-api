import TypeInterface from "../type";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import TypeName from "../../../../../../../name/boolean/type";
import TypeAbbreviation from "../../../../../../../abbreviation/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

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
