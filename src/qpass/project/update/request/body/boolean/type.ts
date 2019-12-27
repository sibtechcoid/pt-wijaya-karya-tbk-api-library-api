import TypeInterface from "../body";
import EnumType from "@dikac/t-enum/boolean/type";
import Status from "../../../../status/status";
import ProjectType from "../../../../../../project/update/request/body/boolean/type";
import TypeType from "../../../../type/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!ProjectType<Extended>(value)) {

        return false;
    }

    if(value.type !== undefined){

        if(!EnumType(value.type, TypeType)) {

            return false;
        }
    }

    if(value.status !== undefined){

        if(!EnumType(value.status, Status)) {

            return false;
        }
    }


    return true;
}
