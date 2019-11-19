import Active from "../active";
import NotNull from "t-object/boolean/type";
import TypeId from "../../id/boolean/type";
import TypeBoolean from "t-boolean/type";
import FiniteNumber from "t-number/boolean/finite";

export default function Type(value : any) : value is Active {

    if(!TypeId<Active>(value)) {

        return false;
    }

    if(!TypeBoolean(value.active)) {

        return false;
    }

    return true;

}