import NotNull from "@dikac/t-object/boolean/type";
import Range from "../range";
import Infinite from "@dikac/t-number/boolean/infinite";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type(value : any) : value is Range {

    if(!NotNull<Range>(value)) {

        return false;
    }

    if(!Positive(value.page)) {

        return false;
    }

    if(!Infinite(value.amount) && !Positive(value.amount)) {

        return false;
    }

    return true;
}