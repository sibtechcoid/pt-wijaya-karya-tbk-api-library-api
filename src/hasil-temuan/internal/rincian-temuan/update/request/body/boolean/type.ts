import TypeInterface from "../../../../update/request/body/body";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeNumber from "@dikac/t-number/boolean/finite";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeString from "@dikac/t-string/boolean/type";
import undefinable from "@dikac/t-undefined/boolean/undefinable";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        id : TypeNumber,
        jadwalRinci : (v) => undefinable(v, TypeNumber),
        prosesBisnis : (v) => undefinable(v, TypeNumber),

        prosedur : (v) => undefinable(v, TypeNumber),
        klausul : (v) => undefinable(v, (v) : v is number[] => ArrayOf(v, TypeNumber)),
        fungsi : (v) => undefinable(v, (v) : v is number[] => ArrayOf(v, TypeNumber)),

        problem : (v) => undefinable(v, (v) : v is string[] => ArrayOf(v, TypeString)),
        objek : (v) => undefinable(v, (v) : v is string[] => ArrayOf(v, TypeString)),

        kriteria : (v) => undefinable(v, (v) : v is number[] => ArrayOf(v, TypeNumber)),

        // lampiran file identifier from lampiran api
        lampiran : (v) => undefinable(v, (v) : v is string[] => ArrayOf(v, TypeString)),
    };

    return Structure(value, sort);

}