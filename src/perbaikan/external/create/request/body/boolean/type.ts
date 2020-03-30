import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";
import Tinjauan from "../../../../tinjauan/tinjauan";
import Keputusan from "../../../../../keputusan/keputusan";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import TypeEnum from "@dikac/t-enum/boolean/type";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {


       // id: (v) => Undefinable(v, Positive),

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
        //
        // /**
        //  * submitted
        //  */
        // submit : BooleanType,

        ditutup : (v) => Undefinable(v, BooleanType),
    };

    return Structure(value, sort);

}
