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
import Tinjauan from "../../../../tinjauan/tinjauan";
import Keputusan from "../../../../../keputusan/keputusan";
import BooleanType from "@dikac/t-boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }
    let sort : Validator<Required<TypeInterface>> = {
        id : (v) => Undefinable(v, Positive),


        hasilTemuan: Positive,

        /**
         * perintah
         */
        faktor : (v) => Undefinable(v, StringType),
        analisis : (v) => Undefinable(v, StringType),
        tinjauan : (v) => Undefinable(v, (v) : v is Tinjauan[] =>TypeEnum(v, Tinjauan)),
        tinjauanCatatan : (v) => Undefinable(v, StringType),
        rencanaPerbaikan : (v) => Undefinable(v, StringType),
        perbaikan : (v) => Undefinable(v, TypeDateCompatible),
        closing :  (v) : v is string[] => ArrayOf(v, StringType),
        pic : (v) => Undefinable(v, Positive),
        prosesBisnis : (v) => Undefinable(v, Positive),
        /**
         * PTKA
         */

        prosedur : (v) => Undefinable(v, Positive),
        ptka : (v) => Undefinable(v, StringType),
        konsekuensi : (v) => Undefinable(v, StringType),
        referensi : (v) => Undefinable(v, StringType),
        keputusan : (v) => Undefinable(v, (v) : v is Keputusan[] =>TypeEnum(v, Keputusan)),
        selesai : (v) => Undefinable(v, TypeDateCompatible),

        /**
         * remark
         */
        ditutup : BooleanType,
        catatan : StringType,
    };

    return Structure(value, sort);
}
