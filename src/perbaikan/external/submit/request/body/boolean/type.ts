import TypeInterface from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Positive from "@dikac/t-number/boolean/positive";
import TypeString from "@dikac/t-string/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let sort : Validator<Required<TypeInterface>> = {
        catatanAuditee : TypeString,
        audit : Positive,
    };

    return Structure(value, sort);

}
