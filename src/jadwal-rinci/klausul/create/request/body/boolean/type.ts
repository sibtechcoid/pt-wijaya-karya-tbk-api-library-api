import TypeInterface from "../body";
import TypeNama from "../../../../../../nama/create/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeNama<Extended>(value)) {

        return false;
    }

    if(!Positive(value.auditProgram)) {

        return false;
    }

    return true;
}
