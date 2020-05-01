import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
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
        dari: (v) => Undefinable(v, TypeNumber),
        untuk : (v) => Undefinable(v, TypeNumber),
        kuisioner: (v) => Undefinable(v, TypeNumber),
        nilai: (v) => Undefinable(v, TypeNumber),
        audit: (v) => Undefinable(v, TypeNumber),
    };

    return Structure(value, sort);
}
