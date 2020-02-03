import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import HasilType from "../hasil/boolean/type";

export default function Typez<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    return ArrayOf(value, HasilType);

}