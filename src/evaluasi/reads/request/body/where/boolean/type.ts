import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import IsString from "@dikac/t-string/boolean/type";
import IsEnum from "@dikac/t-enum/boolean/type";
import Group from "../../../../../../anggota/jabatan/group/group";
import TypeNumber from "@dikac/t-number/boolean/type";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";

export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        //pertanyaan: (v) => Undefinable(v, IsString),
        dari: (v) => Undefinable(v, (v) : v is Group =>IsEnum(v, Group)),
        deactivate : (v) => Undefinable(v, BooleanType),
        untuk : (v) => Undefinable(v, TypeNumber),
        kuisioner: (v) => Undefinable(v, TypeNumber),
        nilai: (v) => Undefinable(v, TypeNumber),
        audit: (v) => Undefinable(v, TypeNumber),
        id: (v) => Undefinable(v, TypeNumber),
        created : (v) => Undefinable(v, TypeDateCompatible),
        updated : (v) => Undefinable(v, TypeDateCompatible),
    };

    return Structure(value, sort);
}
