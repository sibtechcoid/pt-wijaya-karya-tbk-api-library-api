import TypeInterface from "../type";
import BusinessType from "../../../../../business/create/request/business/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!BusinessType<TypeInterface>(value)) {

        return false;
    }
    //
    // if(!ArrayOf(value.levels, IsNumber)) {
    //
    //     return false;
    // }

    return true;
}
