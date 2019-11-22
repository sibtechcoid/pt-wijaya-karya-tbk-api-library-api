import TypeInterface from "../position";
import IsString from "t-string/boolean/type";
import IsNumber from "t-number/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import TypeBusiness from "../../../../../../qpass/place/business/create/request/business/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeBusiness<TypeInterface>(value)) {

        return false;
    }
    //
    // if(!ArrayOf(value.levels, IsNumber)) {
    //
    //     return false;
    // }

    return true;
}
