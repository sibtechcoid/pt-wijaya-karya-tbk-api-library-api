import TypeNama from "../../../../../../nama/update/boolean/type";
import Body from "../body";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!TypeNama(value)) {

        return false;
    }

    if(value.auditProgram !== undefined) {

        if(!TypeNumber(value.auditProgram)) {

            return false;
        }
    }

    return true;
}
