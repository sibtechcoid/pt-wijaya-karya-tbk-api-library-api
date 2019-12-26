import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import IsString from "@dikac/t-string/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    if(value.phone !== undefined) {

        if(!IsString(value.phone) && value.phone !== null) {

            return false;
        }
    }

    if(!IsNumber(value.user)) {

        return false;
    }

    if(!IsNumber(value.position)) {

        return false;
    }


    return true;
}