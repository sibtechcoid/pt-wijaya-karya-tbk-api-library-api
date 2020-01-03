import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import Nama from "../nama";

export default function Type<Extended extends Nama = Nama>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.nama !== undefined) {

        if(!IsString(value.nama)) {

            return false;
        }
    }

    return true;
}
