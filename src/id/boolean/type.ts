import IdInterface from "../id";
import TypeObject from "t-object/boolean/type";
import TypeString from "t-string/boolean/type";
import TypeNumber from "t-number/boolean/type";
import Id from "../id";

export default function Type(value : any, id : boolean)  : value is Id {

    if(!TypeObject<Id>(value)) {

        return false;
    }
    if(!TypeNumber(value.id)) {

        return false;
    }

    return true;
}

