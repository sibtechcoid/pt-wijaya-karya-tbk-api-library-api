import Hasil from "../hasil";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";
import TypeNumber from "@dikac/t-number/boolean/type";
import TypeString from "@dikac/t-string/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeCreate from "../../../../../create/request/body/boolean/type";
import TypeUpdate from "../../../../../update/request/body/boolean/type";

export default function Typez<Extended extends Hasil = Hasil>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    return TypeCreate(value) || TypeUpdate(value);

    // let sort : Validator<Required<TypeInterface>> = {
    //     level: Positive,
    //     ruangan: Positive,
    //     sampel: Positive,
    //     hasil : TypeNumber,
    //     catatan : TypeString,
    //     lampiran : (v) => ArrayOf(v, TypeString),
    // };
    //
    // return Structure(value, sort);
}
