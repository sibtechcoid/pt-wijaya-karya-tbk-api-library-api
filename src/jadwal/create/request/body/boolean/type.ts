import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Plan from "../../../../update/request/body/boolean/plan";
import Realize from "../../../../update/request/body/boolean/realize";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!Plan(value)) {

        return false;
    }

    if(!Realize(value)) {

        return false;
    }


    return true;
}
