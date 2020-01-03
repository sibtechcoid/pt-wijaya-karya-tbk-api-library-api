import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import Singkatan from "../singkatan";
import IsNull from "@dikac/t-null/boolean/type";

export default function Type<Extended extends Singkatan = Singkatan>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!(IsString(value.singkatan) || IsNull(value.singkatan))) {

        return false;
    }

    return true;
}
