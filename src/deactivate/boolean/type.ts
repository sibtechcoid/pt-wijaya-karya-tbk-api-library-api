import NotNull from "t-object/boolean/type";
import BooleanType from "t-boolean/type";
import Deactivate from "../deactivate";

export default function Type(value : any) : value is Deactivate  {

    if(!NotNull<Deactivate>(value)) {

        return false;
    }

    if(!BooleanType(value.deactivate)) {

        return false;
    }

    return true;

}