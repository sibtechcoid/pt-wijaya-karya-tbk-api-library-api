import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsEnum from "@dikac/t-enum/boolean/type";
import Status from "../../../../../../qpass/project/status/status";
import ProjectType from "../../../../../../project/create/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ProjectType(value)) {

        return false;
    }

    if(!IsEnum(value.status, Status)) {

        return false;
    }

    return true;
}
