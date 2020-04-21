import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import TypeNumber from "@dikac/t-number/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        id : (v) => Undefinable(v, Positive),
        untuk : (v) => Undefinable(v, TypeNumber),
        kuisioner: (v) => Undefinable(v, TypeNumber),
        nilai: (v) => Undefinable(v, TypeNumber),
        audit: (v) => Undefinable(v, TypeNumber),
    };
    //
    // if(!TypeId(value)) {
    //
    //     return false;
    // }
    //
    // if(value.nomer !== undefined) {
    //
    //     if(!IsString(value.nomer)) {
    //
    //         return false;
    //     }
    // }
    //
    // if(value.audit !== undefined) {
    //
    //     if(!ArrayOf(value.audit, Positive)) {
    //
    //         return false;
    //     }
    // }
    //
    // if(value.lampiran !== undefined) {
    //
    //     if(!ArrayOf(value.lampiran, IsString)) {
    //
    //         return false;
    //     }
    // }

    return Structure(value, sort)
}
