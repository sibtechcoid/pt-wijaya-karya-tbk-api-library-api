import NotNull from "t-object/boolean/type";
import TypeString from "t-string/boolean/type";
import Body from "../body";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!TypeString(value.username)) {

        return false;
    }

    if(!TypeString(value.password)) {

        return false;
    }

    return true;
}