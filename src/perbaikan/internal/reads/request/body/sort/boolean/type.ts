import Sort from "../sort";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import ModeType from "../../../../../../../sort/mode/boolean/type";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import NotNull from "@dikac/t-object/boolean/type";

export default function Type<
    Extended extends Sort = Sort
> (
    value : any
) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<Sort>> = {
       // deactivate  : (v) => Undefinable(v, ModeType),
         created     : (v) => Undefinable(v, ModeType),
         id          : (v) => Undefinable(v, ModeType),
         updated     : (v) => Undefinable(v, ModeType),
       //  selesai     : (v) => Undefinable(v, ModeType),
       //  audit       : (v) => Undefinable(v, ModeType),
       //  mulai       : (v) => Undefinable(v, ModeType),
       //  pelaksanaan : (v) => Undefinable(v, ModeType),
       //  diselesaikan: (v) => Undefinable(v, ModeType),

        hasilTemuan: (v) => Undefinable(v, ModeType),
        faktor: (v) => Undefinable(v, ModeType),
        analisis: (v) => Undefinable(v, ModeType),
        tinjauan: (v) => Undefinable(v, ModeType),
        tinjauanCatatan: (v) => Undefinable(v, ModeType),
        perbaikan: (v) => Undefinable(v, ModeType),
        closing: (v) => Undefinable(v, ModeType),
        pic: (v) => Undefinable(v, ModeType),
        prsedur: (v) => Undefinable(v, ModeType),
        noPtka: (v) => Undefinable(v, ModeType),
        konsekuensi: (v) => Undefinable(v, ModeType),
        referensi: (v) => Undefinable(v, ModeType),
        keputusan: (v) => Undefinable(v, ModeType),
        selesai: (v) => Undefinable(v, ModeType),
        ditutup: (v) => Undefinable(v, ModeType),
        catatan: (v) => Undefinable(v, ModeType),
        submit: (v) => Undefinable(v, ModeType),
    };

    return Structure(value, sort);
}
