import Body from "../body";
import NotNull from "t-object/boolean/type";
import IsNumber from "t-number/boolean/finite";
import TypeDateCompatible from "t-date/boolean/compatible";
import TypeMember from "../../../../../member/create/request/body/boolean/type";
import ArrayOf from "t-array/boolean/array-of";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.plan !== undefined){

        if(!ArrayOf(value.plan, TypeDateCompatible) || value.plan.length !== 2) {

            return false;
        }
    }

    if(value.realize !== undefined){

        if(!ArrayOf(value.realize, TypeDateCompatible) || value.realize.length !== 2) {

            return false;
        }
    }

    if(value.object !== undefined){

        if(!IsNumber(value.object)) {

            return false;
        }
    }

    if(value.members !== undefined){

        if(!ArrayOf(value.members, TypeMember)) {

            return false;
        }
    }

    return true;
}