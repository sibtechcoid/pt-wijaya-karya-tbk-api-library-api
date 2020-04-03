import Body from "../body";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import TypeInterface from "../body";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";
import TypeObject from "@dikac/t-object/boolean/type";
import TypeString from "@dikac/t-string/boolean/type";
import Status from "../../../../status/status";
import TypeEnum from "@dikac/t-enum/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeObject<Extended>(value)) {

        return false;
    }

    let update : Validator<Required<TypeInterface>> = {
        id: (v) => Undefinable(v, Positive),
        //audit: (v) => Undefinable(v, Positive),
        status : (v) => Undefinable(v,(v) : v is Status => TypeEnum(v, Status)),
        catatan : (v) => Undefinable(v, TypeString),
    };

    return Structure(value, update);
}
