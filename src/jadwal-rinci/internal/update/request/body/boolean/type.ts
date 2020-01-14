import Body from "../body";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import TypeId from "../../../../../../id/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeInterface from "../body";
import Nullable from "@dikac/t-null/boolean/nullable";
import ModeType from "../../../../../../sort/mode/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }
    let sort : Validator<Required<TypeInterface>> = {
        id : TypeNumber,
        audit : TypeNumber,
        selesai : TypeDateCompatible,
        mulai : TypeDateCompatible,
        fungsi : (v) => ArrayOf(v, TypeNumber),
        prosedur : (v) => ArrayOf(v, TypeNumber),
        prosesBisnis : TypeNumber,
        klausul : (v) => ArrayOf(v, TypeNumber),

    };

    return Structure(value, sort);
}
