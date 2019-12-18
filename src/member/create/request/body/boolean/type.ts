import Body from "../body";
import TypeObject from "t-object/boolean/type";
import IsNumber from "t-number/boolean/finite";
import IsString from "t-string/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    if(value.phone !== undefined) {

        if(!IsString(value.phone)) {

            return false;
        }
    }

    if(!IsNumber(value.user)) {

        return false;
    }

    if(!IsNumber(value.position)) {

        return false;
    }

    // if(!IsNumber(value.project)) {
    //
    //     return false;
    // }

    return true;
}