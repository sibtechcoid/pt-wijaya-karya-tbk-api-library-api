import TypeInterface from "../body";
import TypeNama from "../../../../../../nama/create/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeNama<Extended>(value)) {

        return false;
    }

    return true;
}
