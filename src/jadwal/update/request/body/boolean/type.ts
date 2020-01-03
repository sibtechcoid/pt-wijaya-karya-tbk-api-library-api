import TypeInterface from "../body";
import Plan from "./plan";
import Realize from "./realize";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {


    if(!Plan(value)) {

        return false;
    }

    if(!Realize(value)) {

        return false;
    }


    return true;
}
