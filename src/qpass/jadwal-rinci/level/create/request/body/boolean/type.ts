import TypeInterface from "../body";
import TypeName from "../../../../../../../name/create/boolean/type";
import TypeNumber from "t-number/boolean/finite";
import TypeEnum from "t-enum/boolean/type";
import ContentType from "../../../../type/type";

export default function Typez<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeName<Extended>(value)) {

        return false;
    }

    if(!TypeNumber(value.bobot)) {

        return false;
    }

    if(!TypeNumber(value.point)) {

        return false;
    }

    if(!TypeNumber(value.auditProgram)) {

        return false;
    }

    if(!TypeEnum(value.tipe, ContentType)) {

        return false;
    }

    return true;
}
