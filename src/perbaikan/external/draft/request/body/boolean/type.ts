import Body from "../body";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeInterface from "../body";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";
import StringType from "@dikac/t-string/boolean/type";
import TypeEnum from "@dikac/t-enum/boolean/type";
import Tinjauan from "../../../../tinjauan/tinjauan";
import Keputusan from "../../../../../keputusan/keputusan";
import TypeObject from "@dikac/t-object/boolean/type";
import BooleanType from "@dikac/t-boolean/type";

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

        audit: (v) => Undefinable(v, Positive),

        /**
         * perintah
         */
        klausul: (v) => Undefinable(v, StringType),
        auditor: (v) => Undefinable(v, StringType),
        deskripsi: (v) => Undefinable(v, StringType),
        deadline: (v) => Undefinable(v, StringType),
        penyebab: (v) => Undefinable(v, StringType),
        koreksi: (v) => Undefinable(v, StringType),
        unitKerka: (v) => Undefinable(v, StringType),

        kategori : (v) => Undefinable(v,(v) : v is Tinjauan => TypeEnum(v, Tinjauan)),
        bukti :  (v) => Undefinable(v,(v) : v is  string[] => ArrayOf(v, StringType)),

        /**
         * PTKA
         */


        kontak: (v) => Undefinable(v, StringType),
        noPtka: (v) => Undefinable(v, StringType),
        fungsi: (v) => Undefinable(v, StringType),
        penemu: (v) => Undefinable(v, StringType),
        biro: (v) => Undefinable(v, StringType),
        konsekuensi: (v) => Undefinable(v, StringType),
        dibuat : (v) => Undefinable(v, TypeDateCompatible),
        tanggal : (v) => Undefinable(v, TypeDateCompatible),

        // /**
        //  * remark
        //  */
        //ditutup : (v) => Undefinable(v, BooleanType),
        // catatan : (v) => Undefinable(v, StringType),
        //
        // /**
        //  * submitted
        //  */
        // submit : (v) => Undefinable(v, BooleanType),

    };

    return Structure(value, update);
}
