import NotNull from "@dikac/t-object/boolean/type";
import Limit from "../limit";
import RangeType from "../range/boolean/type";

export default function Type(value : any) : value is Limit {

    if(!NotNull<Limit>(value)) {

        return false;
    }

    if(value.limit !== undefined) {

        if(!RangeType(value.limit)) {

            return false;
        }
    }

    return true;
}