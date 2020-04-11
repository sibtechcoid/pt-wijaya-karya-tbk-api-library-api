import TypeEnum from "@dikac/t-enum/boolean/type";
import Akses from "../akses";

export default function Type(value : any) : value is Akses {

    return TypeEnum(value, Akses);
}
