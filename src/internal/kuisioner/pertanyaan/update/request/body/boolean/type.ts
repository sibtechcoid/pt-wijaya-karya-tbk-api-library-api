import NotNull from "t-object/boolean/type";
import Body from "../body";
import StringType from "t-string/boolean/type";
import EnumType from "t-enum/boolean/type";
import Group from "../../../../../../position/group/group";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.pertanyaan !== undefined) {

        if(!StringType(value.pertanyaan)) {

            return false;
        }
    }

    if(value.dari !== undefined) {

        if(!EnumType(value.dari, Group)) {

            return false;
        }
    }

    if(value.untuk !== undefined) {

        if(!EnumType(value.untuk, Group)) {

            return false;
        }
    }

    if(value.untuk !== undefined && value.dari !== undefined) {

        if(value.untuk === value.dari) {

            return false;
        }
    }

    return true;
}
