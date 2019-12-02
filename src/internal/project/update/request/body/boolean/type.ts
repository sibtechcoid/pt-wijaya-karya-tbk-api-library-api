import TypeInterface from "../body";
import NotNull from "t-object/boolean/type";
import IsNumber from "t-number/boolean/finite";
import IsEnum from "t-enum/boolean/type";
import TypeDateCompatible from "t-date/boolean/compatible";
import TypeMember from "../../../../../../member/create/request/body/boolean/type";
import Category from "../../../../category/category";
import ArrayOf from "t-array/boolean/array-of";
import InternalType from "../../../../../../qpass/project/update/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!InternalType<Extended>(value)) {

        return false;
    }

    if(value.object !== undefined){

        if(!IsEnum(value.category, Category)) {

            return false;
        }
    }

    return true;
}
