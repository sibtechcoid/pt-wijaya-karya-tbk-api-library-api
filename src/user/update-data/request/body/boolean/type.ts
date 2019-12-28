import TypeInterface from "../body";
import TypeNumber from "@dikac/t-number/boolean/finite";
import ProfileType from "../../../../update-profile/request/body/boolean/type";

export default function Typez<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!ProfileType<Extended>(value)) {

        return false;
    }

    if(!TypeNumber(value.position)) {

        return false;
    }

    if(!TypeNumber(value.id)) {

        return false;
    }

    return true;
}
