import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import IsEnum from "@dikac/t-enum/boolean/type";
import Group from "../../../../../anggota/jabatan/group/group";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let create : Validator<Required<TypeInterface>> = {
        untuk : TypeNumber,
        kuisioner: TypeNumber,
        nilai: TypeNumber,
        audit: TypeNumber,

    };

    return Structure(value, create);
}
