import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import DeactivatedType from "../../../../../../../../deactivate/read/request/body/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import Status from "../../../../../../../audit/status/status";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!DeactivatedType<Extended>(value)) {

        return false;
    }

    if(value.abbreviation !== undefined) {

        if(!StringType(value.abbreviation)) {

            return false;
        }
    }

    if(value.name !== undefined) {

        if(!StringType(value.name)) {

            return false;
        }
    }



    return true;
}
