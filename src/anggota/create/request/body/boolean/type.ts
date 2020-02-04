import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    if(value.telepon !== undefined) {

        if(!IsString(value.telepon) && value.telepon !== null) {

            return false;
        }
    }

    if(!Positive(value.user)) {

        return false;
    }

    if(!Positive(value.jabatan)) {

        return false;
    }


    return true;
}