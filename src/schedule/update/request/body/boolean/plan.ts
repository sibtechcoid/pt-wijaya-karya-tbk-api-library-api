import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Plan<Extended extends Omit<TypeInterface,'realize'> = Omit<TypeInterface,'realize'>>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.plan !== undefined){

        if(!ArrayOf(value.plan, TypeDateCompatible) || value.plan.length !== 2) {

            return false;
        }
    }


    return true;
}
