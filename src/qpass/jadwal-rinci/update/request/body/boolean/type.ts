import NotNull from "t-object/boolean/type";
import Body from "../body";
import ArrayOf from "t-array/boolean/array-of";
import TypeNumber from "t-number/boolean/type";
import TypeDateCompatible from "t-date/boolean/compatible";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(value.fungsi !== undefined) {

        if(!ArrayOf(value.fungsi, TypeNumber)) {

            return false;
        }
    }

    if(value.prosedur !== undefined) {

        if(!TypeNumber(value.prosedur)) {

            return false;
        }
    }

    if(value.project !== undefined) {

        if(!TypeNumber(value.project)) {

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
