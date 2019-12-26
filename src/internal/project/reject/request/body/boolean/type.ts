import TypeInterface from "../../body/body";
import IsString from "@dikac/t-string/boolean/type";
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
