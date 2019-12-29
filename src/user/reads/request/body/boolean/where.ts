import TypeInterface, {WhereInterface} from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import DeactivatedType from "../../../../../deactivate/read/request/body/boolean/type";

export default function Where<Extended extends WhereInterface = WhereInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!DeactivatedType<Extended>(value)) {

        return false;
    }

    if(value.position !== undefined) {

        if(!TypeNumber(value.position) && value.position !== null) {

            return false;
        }
    }

    if(value.name !== undefined) {

        if(!IsString(value.name)) {

            return false;
        }
    }

    if(value.abbreviation !== undefined) {

        if(!IsString(value.abbreviation)) {

            return false;
        }
    }

    if(value.phone !== undefined) {

        if(!IsString(value.phone) && value.phone !== null) {

            return false;
        }
    }

    if(value.email !== undefined) {

        if(!IsString(value.email) && value.email !== null) {

            return false;
        }
    }


    return true;
}
