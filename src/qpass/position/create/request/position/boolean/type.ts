import TypeInterface from "../position";
import TypeBusiness from "../../../../../object/business/create/request/business/boolean/type";
import TypeAccess from "../../access/boolean/type";
import ArrayOf from "t-array/boolean/array-of";

export default function Typez<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeBusiness<TypeInterface>(value)) {

        return false;
    }

    if(!ArrayOf(value.access, TypeAccess)) {

        return false;
    }

    return true;
}
