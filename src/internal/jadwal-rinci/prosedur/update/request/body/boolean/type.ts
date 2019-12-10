import NotNull from "t-object/boolean/type";
import TypeName from "../../../../../../../name/update/boolean/type";
import Body from "../body";
import TypeNumber from "t-number/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeName(value)) {

        return false;
    }

    if(value.prosesBisnis !== undefined) {

        if(!TypeNumber(value.prosesBisnis)) {

            return false;
        }
    }


    return true;
}