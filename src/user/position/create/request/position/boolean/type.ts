import TypeInterface from "../position";
import TypeBusiness from "../../../../../../qpass/object/business/create/request/business/boolean/type";
import AccessType from "../../../../../access/update/request/access/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeBusiness<TypeInterface>(value)) {

        return false;
    }

    if(!AccessType(value.access)) {

        return false;
    }

    return true;
}
