import TypeInterface from "../data";
import IsString from "t-string/boolean/type";
import IsNumber from "t-number/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import Type from "../../../../../business/create/request/business/boolean/type";

export default function Typez<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!Type<TypeInterface>(value)) {

        return false;
    }

    if(!ArrayOf(value.levels, IsNumber)) {

        return false;
    }

    return true;
}
