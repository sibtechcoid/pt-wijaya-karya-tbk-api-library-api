import NotNull from "t-object/boolean/type";
import Limit from "../limit";
import Finite from "t-number/boolean/finite";
import Infinite from "t-number/boolean/infinite";

export default function Type(value : any) : value is Limit {

    if(!NotNull<Limit>(value)) {

        return false;
    }

    if(!Finite(value.page)) {

        return false;
    }

    if(!Infinite(value.amount) && !Finite(value.page)) {

        return false;
    }

    return true;
}