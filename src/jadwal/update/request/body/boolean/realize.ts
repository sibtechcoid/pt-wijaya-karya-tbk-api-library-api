import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Realize<Extended extends Omit<TypeInterface,'rencana'> = Omit<TypeInterface,'rencana'>>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.realisasi !== undefined){

        if(!ArrayOf(value.realisasi, TypeDateCompatible) || value.realisasi.length !== 2) {

            return false;
        }
    }


    return true;
}
