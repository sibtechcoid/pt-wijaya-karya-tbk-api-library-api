import Sort from "../sort";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import ModeType from "../../../../../../sort/mode/boolean/type";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Mode from "../../../../../../sort/mode/mode";

export default function Type<
    Extended extends Sort = Sort
> (
    value : any
) : value is Extended {

    let sort : Validator<Required<Sort>> = {
        id: (v) => Undefinable(v, ModeType),
        nama: (v) => Undefinable(v, ModeType),
        user: (v) => Undefinable(v, ModeType),
        singkatan: (v) => Undefinable(v, ModeType),
        telepon: (v) => Undefinable(v, ModeType),
        email: (v) => Undefinable(v, ModeType),
        nip: (v) => Undefinable(v, ModeType),
        aktif: (v) => Undefinable(v, ModeType),
        jabatanWika: (v) => Undefinable(v, ModeType),
        parentId: (v) => Undefinable(v, ModeType),
        created: (v) => Undefinable(v, ModeType),
        updated: (v) => Undefinable(v, ModeType),
        deactivate: (v) => Undefinable(v, ModeType),
    };

    return Structure(value, sort);
}
