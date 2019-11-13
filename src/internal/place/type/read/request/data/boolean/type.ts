import NotNull from "t-object/boolean/type";
import BooleanType from "t-boolean/type";
import Data from "../data";

export default function Type(value : any) : value is Data  {

    if(!NotNull<Data>(value)) {

        return false;
    }

    if(!BooleanType(value.deactivated)) {

        return false;
    }

    return true;

}