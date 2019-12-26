import NotNull from "@dikac/t-object/boolean/type";
import Range from "../range";
import Finite from "@dikac/t-number/boolean/finite";
import Infinite from "@dikac/t-number/boolean/infinite";

export default function Type(value : any) : value is Range {

    if(!NotNull<Range>(value)) {

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