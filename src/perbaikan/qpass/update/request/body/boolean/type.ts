import Body from "../body";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import TypeId from "../../../../../../id/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeInterface from "../body";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";
import StringType from "@dikac/t-string/boolean/type";
import TypeEnum from "@dikac/t-enum/boolean/type";
import Keputusan from "../../../../../keputusan/keputusan";
import BooleanType from "@dikac/t-boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }
    let sort : Validator<Required<TypeInterface>> = {
        id : (v) => Undefinable(v, Positive),

        hasilTemuan: (v) => Undefinable(v, Positive),

        /**
         * perintah
         */
        faktor : (v) => Undefinable(v, StringType),
        prosesBisnis : (v) => Undefinable(v, Positive),
        tindakan : (v) => Undefinable(v, StringType),
        analisis : (v) => Undefinable(v, StringType),
        perbaikan : (v) => Undefinable(v, TypeDateCompatible),
        closing :  (v) => Undefinable(v, (v) : v is string[]  => ArrayOf(v, StringType)),
        pic : (v) => Undefinable(v, Positive),

        /**
         * PTKA
         */
        konsekuensi : (v) => Undefinable(v, StringType),
        referensi : (v) => Undefinable(v, StringType),
        prosedur : (v) => Undefinable(v, Positive),
        ptka : (v) => Undefinable(v, StringType),
        keputusan : (v) =>TypeEnum(v, Keputusan),
        selesai : (v) => Undefinable(v, TypeDateCompatible),

        /**
         * remark
         */
        ditutup : (v) => Undefinable(v, BooleanType),
        catatan : (v) => Undefinable(v, StringType),
        remark : (v) => Undefinable(v, StringType),
    };

    return Structure(value, sort);
}
