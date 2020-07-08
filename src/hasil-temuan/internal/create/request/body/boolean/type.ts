import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeString from "@dikac/t-string/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Positive from "@dikac/t-number/boolean/positive";
import Tinjauan from "../../../../tinjauan/tinjauan";
import TypeEnum from "@dikac/t-enum/boolean/type";
import StringType from "@dikac/t-string/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        jadwalRinci : Positive,
        prosesBisnis : Positive,
        tinjauan : (v) =>TypeEnum(v, Tinjauan),
        tinjauanCatatan : StringType,
        // tinjauan : (v) => Undefinable(v,(v) : v is Tinjauan => TypeEnum(v, Tinjauan)),
        // tinjauanCatatan : (v) => Undefinable(v, StringType),
        prosedur : Positive,
        klausul : (v) => ArrayOf(v, Positive),
        fungsi : (v) => ArrayOf(v, Positive),

        masalah : (v) => ArrayOf(v, TypeString),
        objek : (v) => ArrayOf(v, TypeString),

        kriteria : (v) => ArrayOf(v, Positive),

        // lampiran file identifier from lampiran api
        lampiran : (v) => ArrayOf(v, TypeString),
    };

    return Structure(value, sort);

}
