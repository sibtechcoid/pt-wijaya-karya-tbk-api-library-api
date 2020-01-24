import TypeInterface from "../body";
import TypeId from "../../../../../id/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeMember from "../../../../../anggota/create/request/body/boolean/type";
import Realize from "../../../../../jadwal/update/request/body/boolean/realize";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!Realize(value)) {

        return false;
    }

    if(value.anggota !== undefined){

        if(!ArrayOf(value.anggota, TypeMember)) {

            return false;
        }
    }

    return true;
}
