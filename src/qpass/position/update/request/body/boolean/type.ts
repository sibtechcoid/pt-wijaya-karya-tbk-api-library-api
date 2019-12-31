import Body from "../body";
import TypeAccess from "../../../../../access/create/request/body/boolean/type";
import TypeName from "../../../../../../name/update/boolean/type";
import TypeAbbreviation from "../../../../../../abbreviation/update/boolean/type";
import EnumType from "@dikac/t-enum/boolean/type";
import Group from "../../../../group/group";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!TypeName(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }

    if(value.access !== undefined) {

        if(!TypeAccess(value.access)) {

            return false;
        }
    }

    if(value.group !== undefined) {

        if(!EnumType(value.group, Group)) {

            return false;
        }
    }

    return true;
}
