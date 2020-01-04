import TypeInterface from "../body";
import Plan from "../../../../update/request/body/boolean/plan";
import Realize from "../../../../update/request/body/boolean/realize";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!Plan(value)) {

        return false;
    }

    if(!Realize(value)) {

        return false;
    }


    return true;
}
