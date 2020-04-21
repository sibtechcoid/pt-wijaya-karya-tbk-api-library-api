import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";
import Keputusan from "../../../../../keputusan/keputusan";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import TypeEnum from "@dikac/t-enum/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        hasilTemuan: Positive,

        /**
         * perintah
         */
        faktor : StringType,
        prosesBisnis : Positive,
        tindakan : StringType,
        analisis : StringType,
        perbaikan : TypeDateCompatible,
        closing :  (v) => ArrayOf(v, StringType),
        pic : Positive,

        /**
         * PTKA
         */
        konsekuensi : StringType,
        referensi : StringType,
        prosedur : Positive,
        ptka : StringType,
        keputusan : (v) =>TypeEnum(v, Keputusan),
        selesai : TypeDateCompatible,

        /**
         * remark
         */
        ditutup : BooleanType,
        catatan : StringType,
        remark : StringType,
    };

    return Structure(value, sort);

}
