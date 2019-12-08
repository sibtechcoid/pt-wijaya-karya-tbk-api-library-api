import NotNull from "t-object/boolean/type";
import Body from "../body";
import ArrayOf from "t-array/boolean/array-of";
import TypeNumber from "t-number/boolean/type";
import TypeDateCompatible from "t-date/boolean/compatible";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.fungsi !== undefined) {

        if(!ArrayOf(value.fungsi, TypeNumber)) {

            return false;
        }
    }

    if(value.klausul !== undefined) {

        if(!ArrayOf(value.klausul, TypeNumber)) {

            return false;
        }
    }

    if(value.prosedur !== undefined) {

        if(!ArrayOf(value.prosedur, TypeNumber)) {

            return false;
        }
    }

    if(value.project !== undefined) {

        if(!TypeNumber(value.project)) {

            return false;
        }
    }

    if(value.prosesBisnis !== undefined) {

        if(!TypeNumber(value.prosesBisnis)) {

            return false;
        }
    }

    if(value.selesai !== undefined) {

        if(!TypeDateCompatible(value.selesai)) {

            return false;
        }
    }

    if(value.mulai !== undefined) {

        if(!TypeDateCompatible(value.mulai)) {

            return false;
        }
    }

    return true;
}
