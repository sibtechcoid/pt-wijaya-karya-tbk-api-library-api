import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Sort from "../../../../fungsi/reads/request/body/sort/sort";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import ModeType from "../../../../../sort/mode/boolean/type";
import Nullable from "@dikac/t-null/boolean/nullable";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        project : TypeNumber,
        selesai : TypeDateCompatible,
        mulai : TypeDateCompatible,
        fungsi : (v) => ArrayOf(v, TypeNumber),
        prosedur : (v) => ArrayOf(v, TypeNumber),
        prosesBisnis : (v) => Nullable(v, TypeNumber),
        klausul : (v) => Nullable(v, (v) : v is number[] => ArrayOf(v, ModeType)),

        // project : number;
        // selesai  : Date|string;
        // mulai  : Date|string;
        // fungsi : number[];
        // prosedur : number[];
        // prosesBisnis : number|null;
        // klausul : number[]|null;
    };

    return Structure(value, sort);

    // if(!ArrayOf(value.fungsi, TypeNumber)) {
    //
    //     return false;
    // }
    //
    // if(!TypeNumber(value.prosedur)) {
    //
    //     return false;
    // }
    //
    // if(!TypeNumber(value.project)) {
    //
    //     return false;
    // }
    //
    // if(!TypeDateCompatible(value.selesai)) {
    //
    //     return false;
    // }
    //
    // if(!TypeDateCompatible(value.mulai)) {
    //
    //     return false;
    // }

    return true;
}
