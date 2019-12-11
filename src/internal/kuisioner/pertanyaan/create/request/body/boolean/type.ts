import TypeInterface from "../body";
import NotNull from "t-object/boolean/type";
import StringType from "t-string/boolean/type";
import EnumType from "t-enum/boolean/type";
import Group from "../../../../../../position/group/group";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!StringType(value.pertanyaan)) {

        return false;
    }

    if(!EnumType(value.dari, Group)) {

        return false;
    }

    if(!EnumType(value.untuk, Group)) {

        return false;
    }

    if(value.untuk === value.dari) {

        return false;
    }

    return true;
}
