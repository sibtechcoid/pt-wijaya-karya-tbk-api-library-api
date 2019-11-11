import TypeInterface from "../type";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";

export default function Type(value : any) : value is TypeInterface {

    if(!NotNull<TypeInterface>(value)) {

        return false;
    }

    if(!IsString(value.name)) {

        return false;
    }

    if(!IsString(value.abbreviation)) {

        return false;
    }

    return true;
}
