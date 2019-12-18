import TypeInterface from "../../body/body";
import IsString from "t-string/boolean/type";
import AcceptType from "../../../../accept/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!AcceptType<Extended>(value)) {

        return false;
    }

    if(!IsString(value.alasan)) {

        return false;
    }

    return true;
}
