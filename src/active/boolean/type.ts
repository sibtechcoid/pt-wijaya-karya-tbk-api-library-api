import Active from "../active";
import TypeId from "../../id/boolean/type";
import TypeBoolean from "t-boolean/type";

export default function Type(value : any) : value is Active {

    if(!TypeId<Active>(value)) {

        return false;
    }

    if(!TypeBoolean(value.active)) {

        return false;
    }

    return true;

}