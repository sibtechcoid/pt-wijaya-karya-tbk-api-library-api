import TypeInterface from "../body";
import TypeAccess from "../../../../access/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import EnumType from "t-enum/boolean/type";
import Group from "../../../../group/group";
import TypeName from "../../../../../../name/create/boolean/type";
import TypeAbbreviation from "../../../../../../abbreviation/create/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeName<Extended>(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }

    if(!ArrayOf(value.access, TypeAccess)) {

        return false;
    }

    if(!EnumType(value.group, Group)) {

        return false;
    }

    return true;
}
