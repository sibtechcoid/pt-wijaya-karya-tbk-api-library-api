import Body from "../body";
import NotNull from "t-object/boolean/type";
import IsNumber from "t-number/boolean/finite";
import TypeMember from "../../../../../member/create/request/body/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import ScheduleType from "../../../../../schedule/create/request/body/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ScheduleType(value)) {

        return false;
    }

    if(!IsNumber(value.object)) {

        return false;
    }

    if(!ArrayOf(value.members, TypeMember)) {

        return false;
    }

    return true;
}
