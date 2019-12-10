import TypeInterface from "../body";
import NotNull from "t-object/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import TypeNumber from "t-number/boolean/type";
import TypeDateCompatible from "t-date/boolean/compatible";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ArrayOf(value.fungsi, TypeNumber)) {

        return false;
    }

    if(!TypeNumber(value.prosedur)) {

        return false;
    }

    if(!TypeNumber(value.project)) {

        return false;
    }

    if(!TypeDateCompatible(value.selesai)) {

        return false;
    }

    if(!TypeDateCompatible(value.mulai)) {

        return false;
    }

    return true;
}
