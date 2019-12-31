import DeactivatedType from "../../../../../deactivate/read/request/body/boolean/type";
import Body from "../body";
import LimitType from "../../../../../limit/boolean/type";
import SortType from "../../../../../sort/boolean/type";
import Null from "../sort/null";
import NotNull from "@dikac/t-object/boolean/type";
import WhereType from "../where/boolean/type";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!LimitType(value)) {

        return false;
    }

    if(value.sort !== undefined) {

        if(!SortType(value.sort, Null())) {

            return false;
        }
    }

    if(value.where !== undefined) {

        if(!WhereType(value.where)) {

            return false;
        }
    }


    return true;
}