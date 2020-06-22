import TypeInterface from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import BooleanType from "@dikac/t-boolean/type";
import Nullable from "@dikac/t-null/boolean/nullable";
import StringType from "@dikac/t-string/boolean/type";
import NotNull from "@dikac/t-object/boolean/type";
import Body from "../body";
import Positive from "@dikac/t-number/boolean/positive";
import LevelType from "../../../../type/type";
import EnumType from "@dikac/t-enum/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        levelUsaha    : Positive,
        nama : StringType,
        bobot : (v) => Nullable(v, Positive),
        point : (v) => Nullable(v, Positive),
        ruangan : (v) => ArrayOf(v, Positive),
        parent : (v) => Nullable(v, Positive),
        judul : BooleanType,
        tipe    : (v) : v is LevelType =>EnumType(v, LevelType),
    };

    return Structure(value, sort);
}
