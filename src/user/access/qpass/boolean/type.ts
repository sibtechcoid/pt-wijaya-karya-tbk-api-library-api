import TypeEnum from "@dikac/t-enum/boolean/type";
import Qpass from "../qpass";

export default function Type(value : any) : value is Qpass {

    return TypeEnum(value, Qpass);
}