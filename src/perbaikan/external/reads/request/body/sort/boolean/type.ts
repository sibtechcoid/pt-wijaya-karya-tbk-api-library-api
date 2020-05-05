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
        created     : (v) => Undefinable(v, ModeType),
        id          : (v) => Undefinable(v, ModeType),
        updated     : (v) => Undefinable(v, ModeType),
        audit: (v) => Undefinable(v, ModeType),
        auditor: (v) => Undefinable(v, ModeType),
        klausul: (v) => Undefinable(v, ModeType),
        kategori: (v) => Undefinable(v, ModeType),
        deskripsi: (v) => Undefinable(v, ModeType),
        penyebab: (v) => Undefinable(v, ModeType),
        deadline: (v) => Undefinable(v, ModeType),
        bukti: (v) => Undefinable(v, ModeType),
        koreksi: (v) => Undefinable(v, ModeType),
        ptka: (v) => Undefinable(v, ModeType),
        konsekuensi: (v) => Undefinable(v, ModeType),
        kontak: (v) => Undefinable(v, ModeType),
        unitKerja: (v) => Undefinable(v, ModeType),
        fungsi: (v) => Undefinable(v, ModeType),
        dibuat: (v) => Undefinable(v, ModeType),
        penemu: (v) => Undefinable(v, ModeType),
        biro: (v) => Undefinable(v, ModeType),
        tanggal: (v) => Undefinable(v, ModeType),
        catatan: (v) => Undefinable(v, ModeType),
        status: (v) => Undefinable(v, ModeType),
        fungsiBagian: (v) => Undefinable(v, ModeType),
    };

    return Structure(value, sort);
}
