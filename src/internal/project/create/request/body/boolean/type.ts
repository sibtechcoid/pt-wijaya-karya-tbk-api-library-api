import TypeInterface from "../body";
import IsEnum from "t-enum/boolean/type";
import Category from "../../../../category/category";
import InternalType from "../../../../../../internal/project/create/request/body/boolean/type";
export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!InternalType<Extended>(value)) {

        return false;
    }

    if(!IsEnum(value.category, Category)) {

        return false;
    }

    return true;
}
