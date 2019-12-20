import NotNull from "t-object/boolean/type";
import TypeString from "t-string/boolean/type";
import Login from "../login";

export default function Type(value : any) : value is Login {

    if(!NotNull<Login>(value)) {

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