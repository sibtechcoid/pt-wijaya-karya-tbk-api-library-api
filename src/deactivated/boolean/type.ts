import NotNull from "t-object/boolean/type";
import BooleanType from "t-boolean/type";
import Deactivated from "../deactivated";

export default function Type(value : any) : value is Deactivated  {

    if(!NotNull<Deactivated>(value)) {

        return false;
    }

    if(!BooleanType(value.deactivated)) {

        return false;
    }

    return true;

}