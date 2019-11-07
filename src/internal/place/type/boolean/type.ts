import TypeInterface from "../type";
import TypeId from "../../../../id/boolean/type";
import TypeObject from "t-object/boolean/type";
import TypeString from "t-string/boolean/type";
import TypeNumber from "t-number/boolean/type";


export default function Type(value : any)  : value is TypeInterface {

    if(!TypeObject<TypeInterface>(value)) {

        return false;
    }

    if(!TypeString(value.name)) {

        return false;
    }

    if(!TypeString(value.abbreviation)) {

        return false;
    }

    return true;
}

