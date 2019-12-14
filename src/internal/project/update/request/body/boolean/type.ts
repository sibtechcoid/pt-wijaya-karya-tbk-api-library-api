import TypeInterface from "../body";
import IsEnum from "t-enum/boolean/type";
import Category from "../../../../category/category";
import InternalType from "../../../../../../qpass/project/update/request/body/boolean/type";
import TypeId from "../../../../../../id/boolean/type";
import ScheduleType from "../../../../../../schedule/update/request/body/boolean/type";
import IsNumber from "t-number/boolean/finite";
import ArrayOf from "t-array/boolean/array-of";
import TypeMember from "../../../../../../member/create/request/body/boolean/type";
import EnumType from "t-enum/boolean/type";
import Status from "../../../../status/status";

export default function Typez<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {


    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!ScheduleType(value)) {

        return false;
    }

    if(value.object !== undefined){

        if(!IsNumber(value.object)) {

            return false;
        }
    }

    if(value.members !== undefined){

        if(!ArrayOf(value.members, TypeMember)) {

            return false;
        }
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
