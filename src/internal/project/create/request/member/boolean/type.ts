import Member from "../member";
import TypeObject from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import IsNumber from "t-number/boolean/type";

export default function Type(value : any) : value is Member {

    if(!TypeObject<Member>(value)) {

        return false;
    }

    if(!IsString(value.user)) {

        return false;
    }

    if(!IsNumber(value.position)) {

        return false;
    }

    return true;
}