import Member from "../member";
import TypeObject from "t-object/boolean/type";
import IsNumber from "t-number/boolean/type";

export default function Type<Extended extends Member = Member>(value : any) : value is Extended {

    if(!TypeObject<Member>(value)) {

        return false;
    }

    if(!IsNumber(value.user)) {

        return false;
    }

    if(!IsNumber(value.position)) {

        return false;
    }

    return true;
}