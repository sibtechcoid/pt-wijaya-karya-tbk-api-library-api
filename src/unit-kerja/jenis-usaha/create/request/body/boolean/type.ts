import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import TypeName from "../../../../../../name/create/boolean/type";
import TypeAbbreviation from "../../../../../../abbreviation/create/boolean/type";
import IsFinite from "@dikac/t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!IsFinite(value.jenisUnit)) {

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
