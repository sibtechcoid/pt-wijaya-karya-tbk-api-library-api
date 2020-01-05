import TypeName from "../../../../../../nama/update/boolean/type";
import Body from "../body";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

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
