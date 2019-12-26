import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ArrayOf(value.fungsi, TypeNumber)) {

        return false;
    }

    if(!ArrayOf(value.klausul, TypeNumber)) {

        return false;
    }

    if(!ArrayOf(value.prosedur, TypeNumber)) {

        return false;
    }

    if(!TypeNumber(value.project)) {

        return false;
    }

    if(!TypeNumber(value.prosesBisnis)) {

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
