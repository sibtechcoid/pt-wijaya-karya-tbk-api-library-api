import TypeObject from "@dikac/t-object/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import {Required} from "utility-types";

export default function Type<Extension extends {id ?: number} = {id ?: number}>(value : any)  : value is Required<Extension, 'id'> {

    if(!TypeObject<Extension>(value)) {

        return false;
    }

    if(!TypeNumber(value.id)) {

        return false;
    }

    return true;
}
