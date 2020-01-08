import TypeInterface from "../body";
import TypeNama from "../../../../../../nama/create/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Where from "../../../../reads/request/body/where/where";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import BooleanType from "@dikac/t-boolean/type";
import Nullable from "@dikac/t-null/boolean/nullable";
import StringType from "@dikac/t-string/boolean/type";
import NotNull from "@dikac/t-object/boolean/type";
import Body from "../body";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        auditProgram    : TypeNumber,
        nama : StringType,
        bobot : (v) => Nullable(v, TypeNumber),
        point : (v) => Nullable(v, TypeNumber),
        parent : (v) => Nullable(v, TypeNumber),
        judul : BooleanType,
    };

    return Structure(value, sort);
}
