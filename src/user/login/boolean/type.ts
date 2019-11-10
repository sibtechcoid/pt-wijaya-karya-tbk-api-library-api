import NotNull from "t-object/boolean/type";
import IsBoolean from "t-boolean/type";
import Login from "../login";

export default function Type(value : any) : value is Login {

    if(!NotNull<Login>(value)) {

        return false;
    }

    if(!IsBoolean(value.username)) {

        return false;
    }

    if(!IsBoolean(value.password)) {

        return false;
    }

    return true;
}