import TypeInterface from "../body";
import IsEnum from "@dikac/t-enum/boolean/type";
import Status from "../../../../status/status";
import WhereType from "../where/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import DeactivatedType from "../../../../../../deactivate/read/request/body/boolean/type";
import NotNull from "@dikac/t-object/boolean/type";
import Null from "../../../../../../user/reads/request/body/sort/null";
import SortType from "../../../../../../sort/boolean/type";


export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }


    if(value.where !== undefined) {

        if(!WhereType(value)) {

            return false;
        }
    }

    if(value.sort !== undefined) {

        if(!SortType(value.sort, Null())) {

            return false;
        }
    }


    return true;
}