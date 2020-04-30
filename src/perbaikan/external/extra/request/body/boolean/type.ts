import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";
import StringType from "@dikac/t-string/boolean/type";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {

        audit: (v) => Undefinable(v, Positive),
        externalOrganisasiRep: (v) => Undefinable(v, StringType),
        externalOrganisasiNo: (v) => Undefinable(v, StringType),
        externalAuditNo: (v) => Undefinable(v, StringType),

    };

    return Structure(value, sort);

}
