import TypeInterface from "../body";
import IsEnum from "t-enum/boolean/type";
import Category from "../../../../category/category";
import InternalType from "../../../../../../qpass/project/create/request/body/boolean/type";
import Status from "../../../../status/status";
import IsNumber from "t-number/boolean/finite";
import ArrayOf from "t-array/boolean/array-of";
import TypeMember from "../../../../../../member/create/request/body/boolean/type";
import TypeDateCompatible from "t-date/boolean/compatible";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!InternalType<Extended>(value)) {

        return false;
    }

    if(!IsEnum(value.status, Status)) {

        return false;
    }

    if(!IsEnum(value.category, Category)) {

        return false;
    }


    //if(value.object !== undefined){

    if(!ArrayOf(value.plan, TypeDateCompatible) || value.plan.length !== 2) {

        return false;
    }
    // }

    //if(value.object !== undefined){

    if(!ArrayOf(value.realize, TypeDateCompatible) || value.realize.length !== 2) {

        return false;
    }
    // }

    //if(value.object !== undefined){

    if(!IsNumber(value.object)) {

        return false;
    }
    // }

    //if(value.object !== undefined){

    if(!ArrayOf(value.members, TypeMember)) {

        return false;
    }
    // }

    return true;
}
