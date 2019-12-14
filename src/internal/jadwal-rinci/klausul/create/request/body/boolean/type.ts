import TypeInterface from "../body";
import TypeName from "../../../../../../../name/create/boolean/type";
import TypeNumber from "t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeName<Extended>(value)) {

        return false;
    }

    if(!TypeNumber(value.auditProgram)) {

        return false;
    }

    return true;
}
