import TypeInterface from "../body";
import IsEnum from "t-enum/boolean/type";
import Category from "../../../../category/category";
import InternalType from "../../../../../../qpass/project/update/request/body/boolean/type";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

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
