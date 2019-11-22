import TypeEnum from "t-enum/boolean/type";
import Internal from "../internal";


export default function Type(value : any) : value is Internal {

    return TypeEnum(value, Internal);
}