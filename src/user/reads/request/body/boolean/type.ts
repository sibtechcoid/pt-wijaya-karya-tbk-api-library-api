import Body from "../body";
import LimitType from "../../../../../limit/boolean/type";
import SortType from "../sort/boolean/type";
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

        if(!SortType(value.sort)) {

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