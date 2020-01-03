import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import TypeNama from "../../../../../nama/update/boolean/type";
import TypeSingkatan from "../../../../../singkatan/update/boolean/type";
import TypeId from "../../../../../id/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeId(value)) {

        return false;
    }

    if(!TypeNama(value)) {

        return false;
    }

    if(!TypeSingkatan(value)) {

        return false;
    }

    if(value.address !== undefined) {

        if(!IsString(value.address)) {

            return false;
        }
    }


    if(value.level !== undefined) {

        if(!IsNumber(value.level)) {

            return false;
        }
    }

    if(value.type !== undefined) {

        if(!IsNumber(value.type)) {

            return false;
        }
    }

    if(value.business !== undefined) {

        if(!IsNumber(value.business)) {

            return false;
        }
    }

    return true;
}
