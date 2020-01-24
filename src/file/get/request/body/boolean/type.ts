import TypeObject from "@dikac/t-object/boolean/type";
import StringType from "@dikac/t-string/boolean/type";
import Body from "../body";



export default function Type<Extension extends Body = Body>(value : any)  : value is Extension {

    if(!TypeObject<Extension>(value)) {

        return false;
    }

    if(!StringType(value.path)) {

        return false;

    }


    return true;
}
