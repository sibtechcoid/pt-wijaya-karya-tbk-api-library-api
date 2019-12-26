import TypeEnum from "@dikac/t-enum/boolean/type";
import Group from "../group";


export default function Type(value : any) : value is Group {

    return TypeEnum(value, Group);
}