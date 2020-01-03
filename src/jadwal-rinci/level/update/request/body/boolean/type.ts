import TypeNama from "../../../../../../nama/update/boolean/type";
import Body from "../body";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeEnum from "@dikac/t-enum/boolean/type";
import ContentType from "../../../../type/type";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!TypeNama<Extended>(value)) {

        return false;
    }

    if(value.bobot !== undefined) {

        if(!TypeNumber(value.bobot)) {

            return false;
        }
    }

    if(value.point !== undefined) {

        if(!TypeNumber(value.point)) {

            return false;
        }
    }

    if(value.tipe !== undefined) {

        if(!TypeEnum(value.tipe, ContentType)) {

            return false;
        }
    }


    if(value.auditProgram !== undefined) {

        if(!TypeNumber(value.auditProgram)) {

            return false;
        }
    }

    return true;
}
