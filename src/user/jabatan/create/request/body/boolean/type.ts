import TypeInterface from "../body";
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

    return true;
}
