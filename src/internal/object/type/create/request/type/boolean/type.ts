import TypeInterface from "../type";
import NotNull from "t-object/boolean/type";
import TypeName from "../../../../../../../name/create/boolean/type";
import TypeAbbreviation from "../../../../../../../abbreviation/create/boolean/type";

export default function Typez<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

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
