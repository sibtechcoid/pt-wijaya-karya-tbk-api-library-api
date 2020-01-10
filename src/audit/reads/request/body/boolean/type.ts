import TypeInterface from "../body";
import WhereType from "../where/boolean/type";
import NotNull from "@dikac/t-object/boolean/type";
import SortType from "../sort/boolean/type";
import LimitType from "../../../../../limit/boolean/type";


export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!LimitType(value)) {

        return false;
    }

    if(value.where !== undefined) {

        if(!WhereType(value)) {

            return false;
        }
    }

    if(value.sort !== undefined) {

        if(!SortType(value.sort)) {

            return false;
        }
    }


    return true;
}
