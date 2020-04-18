import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import IsString from "@dikac/t-string/boolean/type";
import IsEnum from "@dikac/t-enum/boolean/type";
import Group from "../../../../../../anggota/jabatan/group/group";

export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        pertanyaan: (v) => Undefinable(v, IsString),
        dari: (v) => Undefinable(v, (v) : v is Group =>IsEnum(v, Group)),
        deactivate : (v) => Undefinable(v, BooleanType)
    };

    return Structure(value, sort);
}
