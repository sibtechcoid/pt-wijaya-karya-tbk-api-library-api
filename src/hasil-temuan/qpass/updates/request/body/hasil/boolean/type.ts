import Hasil from "../hasil";
import NotNull from "@dikac/t-object/boolean/type";
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
