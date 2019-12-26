import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ArrayOf(value.plan, TypeDateCompatible) || value.plan.length !== 2) {

        return false;
    }

    if(value.realize !== undefined){

        if(!ArrayOf(value.realize, TypeDateCompatible) || value.realize.length !== 2) {

            return false;
        }
    }


    return true;
}
