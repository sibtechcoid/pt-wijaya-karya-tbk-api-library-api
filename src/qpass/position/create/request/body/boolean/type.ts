import TypeInterface from "../body";
import EnumType from "@dikac/t-enum/boolean/type";
import Group from "../../../../group/group";
import TypeName from "../../../../../../name/create/boolean/type";
import TypeAbbreviation from "../../../../../../abbreviation/create/boolean/type";
import TypeAccess from "../../../../../access/create/request/body/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!TypeName<Extended>(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }

    if(!TypeAccess(value.access)) {

        return false;
    }

    if(!EnumType(value.group, Group)) {

        return false;
    }

    return true;
}
