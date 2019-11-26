import TypeInterface from "../project";
import NotNull from "t-object/boolean/type";
import IsNumber from "t-number/boolean/type";
import IsEnum from "t-enum/boolean/type";
import TypeDateCompatible from "t-date/boolean/compatible";
import TypeMember from "../../member/boolean/type";
import Category from "../../category/category";
import ArrayOf from "t-array/boolean/array-of";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }


    if(!ArrayOf(value.plan, TypeDateCompatible) || value.plan.length !== 2) {

        return false;
    }

    if(!ArrayOf(value.realize, TypeDateCompatible) || value.realize.length !== 2) {

        return false;
    }

    if(!IsNumber(value.place)) {

        return false;
    }

    if(!ArrayOf(value.members, TypeMember)) {

        return false;
    }

    if(!IsEnum(value.category, Category)) {

        return false;
    }

    return true;
}
