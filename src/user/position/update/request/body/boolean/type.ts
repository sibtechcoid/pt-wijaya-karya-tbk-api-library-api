import Body from "../body";
import TypeAccess from "../../../../../access/update/request/body/boolean/type";
import TypeBusiness from "../../../../../../qpass/object/business/update/request/body/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeBusiness<Body>(value)) {

        return false;
    }

    if(!TypeAccess(value.access)) {

        return false;
    }

    return true;
}
