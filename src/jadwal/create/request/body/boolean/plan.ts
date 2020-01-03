import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Plan<Extended extends Omit<TypeInterface,'realisasi'> = Omit<TypeInterface,'realisasi'>>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ArrayOf(value.rencana, TypeDateCompatible) || value.rencana.length !== 2) {

        return false;
    }

    return true;
}
