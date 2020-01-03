import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import IsNumber from "@dikac/t-number/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!IsString(value.nama)) {

        return false;
    }

    if(!IsString(value.user)) {

        return false;
    }

    if(!IsString(value.singkatan)) {

        return false;
    }

    if(!IsString(value.telepon) && value.telepon !== null) {

        return false;
    }

    if(!IsString(value.email) && value.email !== null) {

        return false;
    }

    if(!IsString(value.password)) {

        return false;
    }

    if(!IsNumber(value.jabatan) && value.jabatan !== null) {

        return false;
    }

    return true;
}
