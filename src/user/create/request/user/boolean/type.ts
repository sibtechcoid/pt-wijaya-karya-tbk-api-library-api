import TypeInterface from "../user";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!IsString(value.name)) {

        return false;
    }

    if(!IsString(value.user)) {

        return false;
    }

    if(!IsString(value.abbreviation)) {

        return false;
    }

    if(!IsString(value.phone) && value.phone !== null) {

        return false;
    }

    if(!IsString(value.email) && value.email !== null) {

        return false;
    }

    if(!IsString(value.password)) {

        return false;
    }

    return true;
}
