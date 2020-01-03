import TypeInterface from "../body";
import TypeNama from "../../../../../../nama/create/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeEnum from "@dikac/t-enum/boolean/type";
import ContentType from "../../../../type/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeNama<Extended>(value)) {

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
