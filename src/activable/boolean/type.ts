import Activable from "../activable";
import NotNull from "t-object/boolean/type";
import TypeInterface from "../../internal/place/type/type";
import TypeBoolean from "t-boolean/type";
import FiniteNumber from "t-number/boolean/finite";

export default function Type(value : any) : value is Activable {

    if(!NotNull<TypeInterface>(value)) {

        return false;
    }

    for(let property in value) {

        if(!FiniteNumber(property)) {

            return false;
        }

        if(!TypeBoolean(value[property])) {

            return false;
        }
    }

    return true;

}