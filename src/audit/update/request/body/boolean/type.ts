import TypeInterface from "../body";
import EnumType from "@dikac/t-enum/boolean/type";
import Status from "../../../../status/status";
import TypeType from "../../../../type/type";
import TypeId from "../../../../../id/boolean/type";
import ScheduleType from "../../../../../jadwal/update/request/body/boolean/type";
import IsNumber from "@dikac/t-number/boolean/finite";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeMember from "../../../../../anggota/create/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!ScheduleType(value)) {

        return false;
    }

    if(value.unitKerja !== undefined){

        if(!IsNumber(value.unitKerja)) {

            return false;
        }
    }

    if(value.anggota !== undefined){

        if(!ArrayOf(value.anggota, TypeMember)) {

            return false;
        }
    }

    if(value.tipe !== undefined){

        if(!EnumType(value.tipe, TypeType)) {

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
