import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import IsEnum from "@dikac/t-enum/boolean/type";
import Group from "../../../../../anggota/jabatan/group/group";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        id : (v) => Undefinable(v, Positive),
        pertanyaan : (v) => Undefinable(v, IsString),
        dari : (v) => Undefinable(v, (v) : v is Group =>IsEnum(v, Group)),
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
