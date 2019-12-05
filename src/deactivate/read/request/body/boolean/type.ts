import NotNull from "t-object/boolean/type";
import BooleanType from "t-boolean/type";
import Body from "../body";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended  {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!BooleanType(value.deactivate)) {

        return false;
    }

    return true;

}