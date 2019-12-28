import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.name !== undefined) {

        if(!IsString(value.name)) {

            return false;
        }
    }

    if(value.user !== undefined) {

        if(!IsString(value.user)) {

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

    if(value.password !== undefined) {

        if(!IsString(value.password)) {

            return false;
        }
    }

    return true;
}
