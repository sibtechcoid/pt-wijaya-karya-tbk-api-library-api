import NotNull from "@dikac/t-object/boolean/type";
import Body from "../body";
import StringType from "@dikac/t-string/boolean/type";
import EnumType from "@dikac/t-enum/boolean/type";
import Group from "../../../../../../anggota/jabatan/group/group";

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
