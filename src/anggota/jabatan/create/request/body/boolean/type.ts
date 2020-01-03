import TypeInterface from "../body";
import EnumType from "@dikac/t-enum/boolean/type";
import Group from "../../../../group/group";
import TypeNama from "../../../../../../nama/create/boolean/type";
import TypeSingkatan from "../../../../../../singkatan/create/boolean/type";
import TypeAkses from "../../../../../akses/create/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeNama<Extended>(value)) {

        return false;
    }

    if(!TypeSingkatan(value)) {

        return false;
    }

    if(!TypeAkses(value.akses)) {

        return false;
    }

    if(!EnumType(value.group, Group)) {

        return false;
    }

    return true;
}
