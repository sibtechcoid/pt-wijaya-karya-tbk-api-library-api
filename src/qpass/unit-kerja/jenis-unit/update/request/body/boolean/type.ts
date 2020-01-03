import TypeName from "../../../../../../../name/update/boolean/type";
import TypeAbbreviation from "../../../../../../../abbreviation/update/boolean/type";
import Body from "../body";
import TypeId from "../../../../../../../id/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

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
