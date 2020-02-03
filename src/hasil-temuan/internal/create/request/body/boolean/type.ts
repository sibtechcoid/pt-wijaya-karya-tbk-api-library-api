import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeNumber from "@dikac/t-number/boolean/finite";
import TypeString from "@dikac/t-string/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        jadwalRinci : TypeNumber,
        prosesBisnis : TypeNumber,

        prosedur : TypeNumber,
        klausul : (v) => ArrayOf(v, TypeNumber),
        fungsi : (v) => ArrayOf(v, TypeNumber),

        masalah : (v) => ArrayOf(v, TypeString),
        objek : (v) => ArrayOf(v, TypeString),

        kriteria : (v) => ArrayOf(v, TypeNumber),

        // lampiran file identifier from lampiran api
        lampiran : (v) => ArrayOf(v, TypeString),
    };

    return Structure(value, sort);

}
