import TypeNama from "../../../../../../nama/update/boolean/type";
import Body from "../body";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeEnum from "@dikac/t-enum/boolean/type";
import TypeId from "../../../../../../id/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Where from "../../../../reads/request/body/where/where";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import BooleanType from "@dikac/t-boolean/type";
import Nullable from "@dikac/t-null/boolean/nullable";
import StringType from "@dikac/t-string/boolean/type";
import TypeObject from "@dikac/t-object/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        //created    : (v) => Undefinable(v, ModeType),
        id    : TypeId,
        auditProgram    : (v) => Undefinable(v, TypeNumber),
        parent    : (v) => Undefinable(v, TypeNumber),
        judul : (v) => Undefinable(v, BooleanType),
        // id         : (v) => Undefinable(v, ModeType),
        bobot    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => TypeNumber(p))),
        point    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => TypeNumber(p))),
        nama    : (v) => Undefinable(v, StringType),
    };
    return Structure(value, sort);
}
