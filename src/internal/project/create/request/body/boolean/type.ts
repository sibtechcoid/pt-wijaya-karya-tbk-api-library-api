import TypeInterface from "../body";
import IsEnum from "t-enum/boolean/type";
import Category from "../../../../category/category";
import QpassProjectType from "../../../../../../qpass/project/create/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!QpassProjectType<Extended>(value)) {

        return false;
    }

    if(!IsEnum(value.category, Category)) {

        return false;
    }

    return true;
}
