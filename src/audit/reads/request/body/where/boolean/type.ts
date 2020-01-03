import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import DeactivatedType from "../../../../../../deactivate/read/request/body/boolean/type";
import Where from "../where";
import EnumType from "@dikac/t-enum/boolean/type";
import Status from "../../../../../status/status";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import AuditType from "../../../../../type/type";

export default function
    Type<Extended extends Where = Where>(value : any
) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!DeactivatedType<Extended>(value)) {

        return false;
    }

    if(value.unitKerja !== undefined) {

        if(!TypeNumber(value.unitKerja)) {

            return false;
        }
    }

    if(value.status !== undefined) {

        if(!EnumType(value.status, Status)) {

            return false;
        }
    }

    if(value.tipe !== undefined) {

        if(!EnumType(value.tipe, AuditType)) {

            return false;
        }
    }

    if(value.rencana !== undefined){

        if(!ArrayOf(value.rencana, TypeDateCompatible) || value.rencana.length !== 2) {

            return false;
        }
    }

    if(value.realisasi !== undefined){

        if(!ArrayOf(value.realisasi, TypeDateCompatible) || value.realisasi.length !== 2) {

            return false;
        }
    }


    return true;
}
