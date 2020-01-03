import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import TypeNama from "../../../../../../nama/create/boolean/type";
import TypeSingkatan from "../../../../../../singkatan/create/boolean/type";
import IsFinite from "@dikac/t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!IsFinite(value.jenisUnit)) {

        return false;
    }


    if(!TypeNama(value)) {

        return false;
    }

    if(!TypeSingkatan(value)) {

        return false;
    }

    return true;
}
