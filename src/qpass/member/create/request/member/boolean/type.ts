import TypeInterface from "../member";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import IsNumber from "t-number/boolean/finite";
import ProjectMemberType from "../../../../../project/create/request/member/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!ProjectMemberType<Extended>(value)) {

        return false;
    }

    if(!IsNumber(value.project)) {

        return false;
    }

    return true;
}
