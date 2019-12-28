import Mode from "../mode";
import TypeEnum from "@dikac/t-enum/boolean/type";

export default function Type(value : any) : value is Mode {

    return TypeEnum(value, Mode);
}