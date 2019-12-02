import Body from "../../../../create/request/body/body";
import AbbreviationType from "../../../../../abbreviation/update/boolean/type";
import NameType from "../../../../../name/update/boolean/type";

export default function Type<
    Access,
    Group,
    Extended extends Body<Access, Group> = Body<Access, Group>
    >(
    value : any,
    access : (value) => value is Access
) : value is Extended {

    if(!AbbreviationType<Extended>(value)) {

        return false;
    }

    if(!NameType<Extended>(value)) {

        return false;
    }

    if(value.access !== undefined) {

        if(!access(value.access)) {

            return false;
        }
    }

    return true;
}