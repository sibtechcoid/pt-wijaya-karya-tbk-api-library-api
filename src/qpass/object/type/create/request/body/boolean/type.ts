import TypeInterface from "../body";
import BusinessType from "../../../../../business/create/request/body/boolean/type";

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
