import TypeObject from "@dikac/t-object/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
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
