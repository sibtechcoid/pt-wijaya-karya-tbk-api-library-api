import AbbreviationType from "../../../../../abbreviation/create/boolean/type";
import NameType from "../../../../../name/create/boolean/type";
import Body from "../body";

export default function Type<
    Access,
    Extended extends Body<Access> = Body<Access>
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

    if(!access(value.access)) {

        return false;
    }

    return true;
}
