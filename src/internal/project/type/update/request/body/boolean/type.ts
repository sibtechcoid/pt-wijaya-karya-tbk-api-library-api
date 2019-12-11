import TypeInterface from "../body";
import NotNull from "t-object/boolean/type";
import TypeName from "../../../../../../../name/update/boolean/type";
import TypeAbbreviation from "../../../../../../../abbreviation/update/boolean/type";
import TypeId from "../../../../../../../id/boolean/type";

export default function Typez<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

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
