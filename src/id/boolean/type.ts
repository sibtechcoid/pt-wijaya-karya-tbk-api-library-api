import TypeObject from "t-object/boolean/type";
import TypeNumber from "t-number/boolean/type";
import Id from "../id";

interface Optional {
    id ?: number;
}

export default function Type<Extension extends Optional = Optional>(value : any)  : value is Omit<Extension, 'id'> & Id {

    if(!TypeObject<Extension>(value)) {

        return false;
    }

    if(!TypeNumber(value.id)) {

        return false;
    }

    return true;
}
