import TypeInterface from "../body";
import TypeBusiness from "../../../../../../qpass/object/business/create/request/body/boolean/type";
import TypeAccess from "../../../../access/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import EnumType from "t-enum/boolean/type";
import Group from "../../../../group/group";


export default function Typez<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeBusiness<TypeInterface>(value)) {

        return false;
    }

    if(!EnumType(value.group, Group)) {

        return false;
    }

    if(!ArrayOf(value.access, TypeAccess)) {

        return false;
    }

    return true;
}
