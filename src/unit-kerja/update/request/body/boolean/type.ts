import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import TypeNama from "../../../../../nama/update/boolean/type";
import TypeSingkatan from "../../../../../singkatan/update/boolean/type";
import TypeId from "../../../../../id/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeId(value)) {

        return false;
    }

    if(!TypeNama(value)) {

        return false;
    }

    if(!TypeSingkatan(value)) {

        return false;
    }

    if(value.alamat !== undefined) {

        if(!IsString(value.alamat)) {

            return false;
        }
    }


    if(value.levelUsaha !== undefined) {

        if(!IsNumber(value.levelUsaha)) {

            return false;
        }
    }

    if(value.jenisUnit !== undefined) {

        if(!Positive(value.jenisUnit)) {

            return false;
        }
    }

    if(value.jenisUsaha !== undefined) {

        if(!Positive(value.jenisUsaha)) {

            return false;
        }
    }

    return true;
}
