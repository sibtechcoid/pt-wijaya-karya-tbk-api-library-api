import Text from "../text";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";

export default function Type(value : any) : value is Text {

    if(!NotNull<Text>(value)) {

        return false;
    }

    if(!IsString(value.text)) {

        return false;
    }

    return true;
}