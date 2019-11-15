import Activable from "../activable";
import NotNull from "t-object/boolean/type";
import TypeId from "../../id/boolean/type";
import TypeBoolean from "t-boolean/type";
import FiniteNumber from "t-number/boolean/finite";

export default function Type(value : any) : value is Activable {

    if(!TypeId<Activable>(value)) {

        return false;
    }

    if(!TypeBoolean(value.active)) {

        return false;
    }

    return true;

}