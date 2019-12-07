import TypeInterface from "../body";
import TypeName from "../../../../../../../name/create/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeName<Extended>(value)) {

        return false;
    }

    return true;
}
