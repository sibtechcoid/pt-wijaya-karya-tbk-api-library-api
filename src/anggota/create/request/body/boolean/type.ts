import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import IsString from "@dikac/t-string/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    if(value.telepon !== undefined) {

        if(!IsString(value.telepon) && value.telepon !== null) {

            return false;
        }
    }

    if(!IsNumber(value.user)) {

        return false;
    }

    if(!IsNumber(value.jabatan)) {

        return false;
    }


    return true;
}