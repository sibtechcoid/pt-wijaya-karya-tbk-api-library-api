import Where from "../../../../saves/request/body/body";
import UpdateType from "../../../../update/request/body/boolean/type";
import CreateType from "../../../../create/request/body/boolean/type";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayType from "@dikac/t-array/boolean/type";

export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ArrayType(value)) {

        return false;
    }

    for(let val of value) {

        if(CreateType(val)) {
            continue;
        }

        if(UpdateType(val)) {
            continue;
        }

        return false;
    }

    return true;
}
