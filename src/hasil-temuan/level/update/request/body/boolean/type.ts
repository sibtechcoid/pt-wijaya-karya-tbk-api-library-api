import Body from "../body";
import TypeNumber from "@dikac/t-number/boolean/finite";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import BooleanType from "@dikac/t-boolean/type";
import Nullable from "@dikac/t-null/boolean/nullable";
import StringType from "@dikac/t-string/boolean/type";
import TypeObject from "@dikac/t-object/boolean/type";
import EnumType from "@dikac/t-enum/boolean/type";
import LevelType from "../../../../type/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        id    : TypeNumber,
        levelUsaha    : (v) => Undefinable(v, TypeNumber),
        parent    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => TypeNumber(p))),
        judul : (v) => Undefinable(v, BooleanType),
        bobot    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => TypeNumber(p))),
        point    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => TypeNumber(p))),
        nama    : (v) => Undefinable(v, StringType),
        tipe    : (v) => Undefinable(v, (v) : v is LevelType =>EnumType(v, LevelType)),
    };

    return Structure(value, sort);
}
