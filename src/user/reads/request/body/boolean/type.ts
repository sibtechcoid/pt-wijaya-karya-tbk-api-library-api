import DeactivatedType from "../../../../../deactivate/read/request/body/boolean/type";
import Body from "../body";
import LimitType from "../../../../../limit/boolean/type";
import SortType from "../../../../../sort/boolean/type";
import Null from "../null";

export default function Type(value : any) : value is Body {

    if(!DeactivatedType(value)) {

        return false;
    }

    if(!LimitType(value)) {

        return false;
    }


    if(!SortType(value, Null())) {

        return false;
    }


    return true;
}