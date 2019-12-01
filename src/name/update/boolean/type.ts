import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import Name from "../name";

export default function Type<Extended extends Name = Name>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.name !== undefined) {

        if(!IsString(value.name)) {

            return false;
        }
    }

    return true;
}
