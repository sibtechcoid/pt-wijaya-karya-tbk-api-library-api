import TypeInterface from "../body";
import IsEnum from "@dikac/t-enum/boolean/type";
import Category from "../../../../category/category";
import NotNull from "@dikac/t-object/boolean/type";
import ProjectType from "../../../../../../project/create/request/body/boolean/type";
import Status from "../../../../status/status";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!ProjectType(value)) {

        return false;
    }

    if(!IsEnum(value.status, Status)) {

        return false;
    }

    if(!IsEnum(value.category, Category)) {

        return false;
    }

    return true;
}
