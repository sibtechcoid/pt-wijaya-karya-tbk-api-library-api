import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Positive from "@dikac/t-number/boolean/positive";
import StringType from "@dikac/t-string/boolean/type";
import TypeEnum from "@dikac/t-enum/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Keputusan from "../../../../../../keputusan/keputusan";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {
        hasilTemuan: (v) => Undefinable(v, (v) : v is  number[] => ArrayOf(v, Positive)),

        /**
         * perintah
         */
        faktor : (v) => Undefinable(v, StringType),
        prosesBisnis : (v) => Undefinable(v, StringType),
        analisis : (v) => Undefinable(v, StringType),
        tindakan : (v) => Undefinable(v, StringType),
        perbaikan : (v) => Undefinable(v, TypeDateCompatible),
        closing :  (v) => Undefinable(v,(v) : v is  string[] => ArrayOf(v, StringType)),
        pic : (v) => Undefinable(v, Positive),

        /**
         * PTKA
         */
        konsekuensi : (v) => Undefinable(v, StringType),
        ptka : (v) => Undefinable(v, StringType),
        prosedur : (v) => Undefinable(v, StringType),
        keputusan : (v) => Undefinable(v, (v) : v is Keputusan =>TypeEnum(v, Keputusan)),
        selesai : (v) => Undefinable(v, TypeDateCompatible),

        /**
         * remark
         */
        ditutup : (v) => Undefinable(v, BooleanType),
        catatan : (v) => Undefinable(v, StringType),
    };

    return Structure(value, sort);
}
