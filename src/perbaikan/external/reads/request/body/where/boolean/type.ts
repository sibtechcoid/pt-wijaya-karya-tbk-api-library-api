import NotNull from "@dikac/t-object/boolean/type";
import Where from "../where";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Positive from "@dikac/t-number/boolean/positive";
import StringType from "@dikac/t-string/boolean/type";
import Tinjauan from "../../../../../tinjauan/tinjauan";
import TypeEnum from "@dikac/t-enum/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Keputusan from "../../../../../../keputusan/keputusan";
import Status from "../../../../../status/status";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Where>> = {

        audit: (v) => Undefinable(v, Positive),

        /**
         * perintah
         */
        kategori : (v) => Undefinable(v,(v) : v is Tinjauan => TypeEnum(v, Tinjauan)),

        klausul : (v) => Undefinable(v, StringType),
        auditor : (v) => Undefinable(v, StringType),
        deskripsi : (v) => Undefinable(v, StringType),
        deadline : (v) => Undefinable(v, StringType),
        penyebab : (v) => Undefinable(v, StringType),
        koreksi : (v) => Undefinable(v, StringType),
        unitKerja : (v) => Undefinable(v, StringType),
        bukti :  (v) => Undefinable(v,(v) : v is  string[] => ArrayOf(v, StringType)),

        /**
         * PTKA
         */
        kontak: (v) => Undefinable(v, StringType),
        ptka: (v) => Undefinable(v, StringType),
        fungsi: (v) => Undefinable(v, StringType),
        penemu: (v) => Undefinable(v, StringType),
        biro: (v) => Undefinable(v, StringType),
        konsekuensi: (v) => Undefinable(v, StringType),

        dibuat : (v) => Undefinable(v, TypeDateCompatible),
        tanggal : (v) => Undefinable(v, TypeDateCompatible),
        /**
         * remark
         */
        // status : (v) => Undefinable(v,(v) : v is Status => TypeEnum(v, Status)),
        //
        // /**
        //  * submitted
        //  */
        ditutup : (v) => Undefinable(v, BooleanType),
    };

    return Structure(value, sort);
}
