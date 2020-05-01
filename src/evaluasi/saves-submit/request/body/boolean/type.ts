import Where from "../../../../saves/request/body/body";
import UpdateType from "../../../../update/request/body/boolean/type";
import CreateType from "../../../../create/request/body/boolean/type";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayType from "@dikac/t-array/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Group from "../../../../../anggota/jabatan/group/group";
import IsEnum from "@dikac/t-enum/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import TypeNumber from "@dikac/t-number/boolean/type";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";

export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ArrayType(value)) {

        return false;
    }

    for(let val of value) {

        if(CreateType(val)) {
            continue;
        }

        if(UpdateType(val)) {
            continue;
        }

        return false;
    }

    return true;
}
