import TypeInterface from "../project";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import IsNumber from "t-number/boolean/type";
import TypeDateCompatible from "t-date/boolean/compatible";
import Member from "../../member/member";
import Category from "../../category/category";
import ArrayOf from "t-array/boolean/array-of";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

// public planned : [Date|string, Date|string],
//         public realize : [Date|string, Date|string],

//         public place : number,
//         public members : Member[],
//         public category : Category

    if(!ArrayOf(value.planned, TypeDateCompatible) && value.planned.length === 2) {

        return false;
    }

    if(!ArrayOf(value.realize, TypeDateCompatible) && value.realize.length === 2) {

        return false;
    }

    if(!IsNumber(value.place)) {

        return false;
    }

    if(!IsNumber(value.members)) {

        throw new Error('implemented');
    }

    if(!IsNumber(value.category)) {

        throw new Error('implemented');
    }

    // throw new Error('implemented');
    // if(!IsString(value.abbreviation)) {
    //
    //     return false;
    // }
    //
    // if(!IsString(value.address)) {
    //
    //     return false;
    // }
    //
    // if(!IsString(value.abbreviation)) {
    //
    //     return false;
    // }
    //


    return true;
}
