import TypeEnum from "t-enum/boolean/type";
import Access from "../access";


export default function Type(value : any) : value is Access {

    return TypeEnum(value, Access);
}