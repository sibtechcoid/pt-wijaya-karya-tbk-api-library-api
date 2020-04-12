import NotNull from "@dikac/t-object/boolean/type";
import DeactivatedType from "../../../../../../deactivate/read/request/body/boolean/type";
import Where from "../where";
import EnumType from "@dikac/t-enum/boolean/type";
import Status from "../../../../../status/status";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import ArrayType from "@dikac/t-array/boolean/type";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import AuditType from "../../../../../type/type";
import Positive from "@dikac/t-number/boolean/positive";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import BooleanType from "@dikac/t-boolean/type";
import Fase from "../../../../../fase/fase";

export default function
    Type<Extended extends Where = Where>(value : any
) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let count : Validator<object> = {
        rencana: (v) => Undefinable(v, (v) : v is boolean => ArrayType(v) && v.length === 2),
        realisasi: (v) => Undefinable(v, (v) : v is boolean => ArrayType(v) && v.length === 2),
    };

    let sort : Validator<Required<Where>> = {
        unitKerja: (v) => Undefinable(v, Positive),
        deactivate: (v) => Undefinable(v, DeactivatedType),
        rencana: (v) => Undefinable(v, (v) : v is Date[] => ArrayOf(v, TypeDateCompatible)),
        realisasi: (v) => Undefinable(v, (v) : v is Date[] => ArrayOf(v, TypeDateCompatible)),
        status: (v) => Undefinable(v, (v) : v is Status => EnumType(v, Status)),
        tipe: (v) => Undefinable(v, (v) : v is AuditType => EnumType(v, AuditType)),
        fase: (v) => Undefinable(v, (v) : v is Fase => EnumType(v, Fase)),

    };


    return Structure(value, count) && Structure(value, sort);

    if(!DeactivatedType<Extended>(value)) {

        return false;
    }

    if(value.unitKerja !== undefined) {

        if(!Positive(value.unitKerja)) {

            return false;
        }
    }

    if(value.status !== undefined) {

        if(!ArrayOf(value.status, (v) : v is Status => EnumType(v, Status))) {

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
