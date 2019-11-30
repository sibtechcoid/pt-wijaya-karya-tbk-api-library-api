import TypeInterface from "../body";
import TypeBusiness from "../../../../../../qpass/object/business/create/request/body/boolean/type";
import TypeAccess from "../../../../../access/create/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeBusiness<TypeInterface>(value)) {


        return false;
    }

    if(!TypeAccess(value.access)) {

        return false;
    }

    return true;
}
