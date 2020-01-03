import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import StringType from "@dikac/t-string/boolean/type";
import EnumType from "@dikac/t-enum/boolean/type";
import Group from "../../../../../../anggota/jabatan/group/group";

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
