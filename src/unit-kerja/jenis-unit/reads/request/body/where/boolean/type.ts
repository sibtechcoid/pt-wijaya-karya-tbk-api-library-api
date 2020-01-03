import NotNull from "@dikac/t-object/boolean/type";
import DeactivatedType from "../../../../../../../deactivate/read/request/body/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!DeactivatedType<Extended>(value)) {

        return false;
    }

    if(value.singkatan !== undefined) {

        if(!StringType(value.singkatan)) {

            return false;
        }
    }

    if(value.nama !== undefined) {

        if(!StringType(value.nama)) {

            return false;
        }
    }



    return true;
}
