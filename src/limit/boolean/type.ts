import NotNull from "@dikac/t-object/boolean/type";
import Limit from "../limit";
import LimitType from "../range/boolean/type";

export default function Type(value : any) : value is Limit {

    if(!NotNull<Limit>(value)) {

        return false;
    }

    if(value.limit !== undefined) {

        if(!LimitType(value)) {

            return false;
        }
    }
    return true;
}