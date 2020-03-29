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
import TypeObject from "@dikac/t-object/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    let update : Validator<Required<TypeInterface>> = {
        // id : Positive,
        // audit : (v) => Undefinable(v, Positive),
        // selesai : (v) => Undefinable(v, TypeDateCompatible),
        // mulai : (v) => Undefinable(v, TypeDateCompatible),
        // fungsi :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        // prosedur :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        // prosesBisnis : (v) => Undefinable(v, Positive),
        // klausul :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        // auditor :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),

        id: (v) => Undefinable(v, Positive),

        hasilTemuan: (v) => Undefinable(v, Positive),

        /**
         * perintah
         */
        faktor : (v) => Undefinable(v, StringType),
        analisis : (v) => Undefinable(v, StringType),
        tinjauan : (v) => Undefinable(v,(v) : v is Tinjauan => TypeEnum(v, Tinjauan)),
        tinjauanCatatan : (v) => Undefinable(v, StringType),
        perbaikan : (v) => Undefinable(v, TypeDateCompatible),
        closing :  (v) => Undefinable(v,(v) : v is  string[] => ArrayOf(v, StringType)),
        pic : (v) => Undefinable(v, Positive),

        /**
         * PTKA
         */
        prsedur : (v) => Undefinable(v, Positive),
        noPtka : (v) => Undefinable(v, StringType),
        konsekuensi : (v) => Undefinable(v, StringType),
        referensi : (v) => Undefinable(v, StringType),
        keputusan : (v) => Undefinable(v, (v) : v is Keputusan =>TypeEnum(v, Keputusan)),
        selesai : (v) => Undefinable(v, TypeDateCompatible),

        // /**
        //  * remark
        //  */
        // ditutup : (v) => Undefinable(v, BooleanType),
        // catatan : (v) => Undefinable(v, StringType),
        //
        // /**
        //  * submitted
        //  */
        // submit : (v) => Undefinable(v, BooleanType),

    };

    return Structure(value, update);
}
