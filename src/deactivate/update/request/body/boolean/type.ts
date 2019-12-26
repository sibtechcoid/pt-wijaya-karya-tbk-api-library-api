import Body from "../body";
import TypeId from "../../../../../id/boolean/type";
import TypeBoolean from "@dikac/t-boolean/type";

export default function Type(value : any) : value is Body {

    if(!TypeId<Body>(value)) {

        return false;
    }

    if(!TypeBoolean(value.deactivate)) {

        return false;
    }

    return true;

}