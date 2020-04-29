import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";
import Tinjauan from "../../../../tinjauan/tinjauan";
import StringType from "@dikac/t-string/boolean/type";
import TypeEnum from "@dikac/t-enum/boolean/type";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Status from "../../../../status/status";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        audit: (v) => Undefinable(v, Positive),
        organisasiRep: (v) => Undefinable(v, StringType),
        organisasiNo: (v) => Undefinable(v, StringType),
        auditNo: (v) => Undefinable(v, StringType),

    };

    return Structure(value, sort);

}
