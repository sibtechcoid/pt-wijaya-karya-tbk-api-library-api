import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeString from "@dikac/t-string/boolean/type";
import undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        id : Positive,
        jadwalRinci : (v) => undefinable(v, Positive),
        prosesBisnis : (v) => undefinable(v, Positive),

        prosedur : (v) => undefinable(v, Positive),
        klausul : (v) => undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        fungsi : (v) => undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),

        masalah : (v) => undefinable(v, (v) : v is string[] => ArrayOf(v, TypeString)),
        objek : (v) => undefinable(v, (v) : v is string[] => ArrayOf(v, TypeString)),

        kriteria : (v) => undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),

        // lampiran file identifier from lampiran api
        lampiran : (v) => undefinable(v, (v) : v is string[] => ArrayOf(v, TypeString)),
    };

    return Structure(value, sort);

}