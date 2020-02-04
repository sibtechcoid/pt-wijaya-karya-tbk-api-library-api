import TypeInterface from "../body";
import TypeNumber from "@dikac/t-number/boolean/finite";
import ProfileType from "../../../../update-profile/request/body/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!ProfileType<Extended>(value)) {

        return false;
    }

    if(value.jabatan !== undefined) {

        if(!TypeNumber(value.jabatan) && value.jabatan !== null) {

            return false;
        }
    }

    if(!Positive(value.id)) {

        return false;
    }

    return true;
}
