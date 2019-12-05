import TypeInterface from "../body";
import IsEnum from "t-enum/boolean/type";
import Status from "../../../../status/status";
import ArrayOf from "t-array/boolean/array-of";
import DeactivatedType from "../../../../../../deactivate/read/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!DeactivatedType<Extended>(value)) {

        return false;
    }

    if(!ArrayOf(value.status, (value) : value is Status => IsEnum(value, Status))) {

        return false;
    }

    return true;
}
