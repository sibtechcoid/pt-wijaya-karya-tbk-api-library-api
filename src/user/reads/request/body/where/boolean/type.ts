import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import DeactivatedType from "../../../../../../deactivate/read/request/body/boolean/type";
import Where from "../where";

export default function Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!DeactivatedType<Extended>(value)) {

        return false;
    }

    if(value.jabatan !== undefined) {

        if(!TypeNumber(value.jabatan) && value.jabatan !== null) {

            return false;
        }
    }

    if(value.nama !== undefined) {

        if(!IsString(value.nama)) {

            return false;
        }
    }

    if(value.singkatan !== undefined) {

        if(!IsString(value.singkatan)) {

            return false;
        }
    }

    if(value.telepon !== undefined) {

        if(!IsString(value.telepon) && value.telepon !== null) {

            return false;
        }
    }

    if(value.email !== undefined) {

        if(!IsString(value.email) && value.email !== null) {

            return false;
        }
    }


    return true;
}
