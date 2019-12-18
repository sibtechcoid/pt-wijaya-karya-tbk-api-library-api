import TypeInterface from "../../body/body";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!IsString(value.alasan)) {

        return false;
    }
    return true;
}
