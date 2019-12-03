import TypeInterface from "../body";
import BusinessType from "../../../../../business/create/request/body/boolean/type";
import TypeName from "../../../../../../../name/create/boolean/type";
import TypeAbbreviation from "../../../../../../../abbreviation/create/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeName<Extended>(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }
    //
    // if(!ArrayOf(value.levels, IsNumber)) {
    //
    //     return false;
    // }

    return true;
}
