import Text from "../user";
import NotNull from "t-object/boolean/type";
import IsBoolean from "t-boolean/type";
import User from "../user";

export default function Type(value : any) : value is User {

    if(!NotNull<Text>(value)) {

        return false;
    }

    if(!IsBoolean(value.name)) {

        return false;
    }

    if(!IsBoolean(value.email)) {

        return false;
    }

    if(!IsBoolean(value.abbreviation)) {

        return false;
    }

    if(!IsBoolean(value.phone)) {

        return false;
    }

    return true;
}