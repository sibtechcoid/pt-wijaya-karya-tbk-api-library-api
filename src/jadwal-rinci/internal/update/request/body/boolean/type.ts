import Body from "../body";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import TypeId from "../../../../../../id/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeInterface from "../body";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    let update : Validator<Required<TypeInterface>> = {
        id : Positive,
        audit : (v) => Undefinable(v, Positive),
        selesai : (v) => Undefinable(v, TypeDateCompatible),
        mulai : (v) => Undefinable(v, TypeDateCompatible),
        fungsi :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        prosedur :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        prosesBisnis : (v) => Undefinable(v, Positive),
        klausul :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        auditor :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),

    };

    return Structure(value, update);
}
