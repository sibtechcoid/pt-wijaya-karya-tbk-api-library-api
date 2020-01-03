import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import TypeNama from "../../../../../nama/create/boolean/type";
import TypeSingkatan from "../../../../../singkatan/create/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeNama(value)) {

        return false;
    }

    if(!TypeSingkatan(value)) {

        return false;
    }

    if(!IsString(value.alamat)) {

        return false;
    }


    if(!IsNumber(value.jenisUsaha)) {

        return false;
    }

    if(!IsNumber(value.levelUsaha)) {

        return false;
    }

    if(!IsNumber(value.jenisUnit)) {

        return false;
    }

    return true;
}
