import DeactivatedType from "../../../../../deactivate/read/request/body/boolean/type";
import Body from "../body";
import LimitType from "../../../../../limit/boolean/type";
import SortType from "../../../../../sort/boolean/type";
import Null from "../null";
import NotNull from "@dikac/t-object/boolean/type";
import Where from "./where";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!LimitType(value)) {

        return false;
    }

    if(!SortType(value, Null())) {

        return false;
    }

    if(value.where !== undefined) {

        if(!Where(value.where)) {

            return false;
        }
    }


    return true;
}