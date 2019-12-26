import NotNull from "@dikac/t-object/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Body from "../body";

export default function Type(value : any) : value is Body  {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!BooleanType(value.deactivate)) {

        return false;
    }

    return true;

}