import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsEnum from "@dikac/t-enum/boolean/type";
import Status from "../../../../status/status";
import TypeType from "../../../../type/type";
import ScheduleType from "../../../../../schedule/create/request/body/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeMember from "../../../../../anggota/create/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ScheduleType(value)) {

        return false;
    }

    if(!IsNumber(value.object)) {

        return false;
    }

    if(!ArrayOf(value.anggota, TypeMember)) {

        return false;
    }

    if(!IsEnum(value.status, Status)) {

        return false;
    }

    if(!IsEnum(value.type, TypeType)) {

        return false;
    }

    return true;
}
