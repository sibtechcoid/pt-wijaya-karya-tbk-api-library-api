import NotNull from "t-object/boolean/type";
import TypeName from "../../../../../../../name/update/boolean/type";
import Body from "../body";
import TypeNumber from "t-number/boolean/type";
import TypeId from "../../../../../../../id/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!TypeName(value)) {

        return false;
    }

    if(value.auditProgram !== undefined) {

        if(!TypeNumber(value.auditProgram)) {

            return false;
        }
    }

    return true;
}
