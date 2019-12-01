import TypeObject from "t-object/boolean/type";
import TypeNumber from "t-number/boolean/type";
import Id from "../id";

export default function Type<Extension extends Id = Id>(value : any)  : value is Extension {

    if(!TypeObject<Extension>(value)) {

        return false;
    }
    if(!TypeNumber(value.id)) {

        return false;
    }

    return true;
}

