import Member from "../member";
import TypeObject from "@dikac/t-object/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends Member = Member>(value : any) : value is Extended {

    if(!TypeObject<Member>(value)) {

        return false;
    }

    if(!Positive(value.user)) {

        return false;
    }

    if(!Positive(value.jabatan)) {

        return false;
    }

    return true;
}