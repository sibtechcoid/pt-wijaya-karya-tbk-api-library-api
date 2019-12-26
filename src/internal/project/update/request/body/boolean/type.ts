import TypeInterface from "../body";
import IsEnum from "@dikac/t-enum/boolean/type";
import Category from "../../../../category/category";
import ScheduleType from "../../../../../../schedule/update/request/body/boolean/type";
import EnumType from "@dikac/t-enum/boolean/type";
import Status from "../../../../status/status";
import ProjectType from "../../../../../../project/update/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!ProjectType<Extended>(value)) {

        return false;
    }

    if(!ScheduleType(value)) {

        return false;
    }

    if(value.status !== undefined){

        if(!EnumType(value.status, Status)) {

            return false;
        }
    }

    if(value.category !== undefined){

        if(!IsEnum(value.category, Category)) {

            return false;
        }
    }

    return true;
}
