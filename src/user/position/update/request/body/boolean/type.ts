import Body from "../body";
import TypeAccess from "../../../../../access/update/request/body/boolean/type";
import TypeId from "../../../../../../id/boolean/type";
import TypeName from "../../../../../../name/update/boolean/type";
import TypeAbbreviation from "../../../../../../abbreviation/update/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Body>(value)) {

        return false;
    }

    if(!TypeName(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }

    if(value.access !== undefined) {

        if(!TypeAccess(value.access)) {

            return false;
        }
    }

    return true;
}
