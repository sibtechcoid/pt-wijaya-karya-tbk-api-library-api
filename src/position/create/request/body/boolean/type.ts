import AbbreviationType from "../../../../../abbreviation/create/boolean/type";
import NameType from "../../../../../name/create/boolean/type";
import Body from "../body";
import EnumType from "@dikac/t-enum/boolean/type";

export default function Type<
    Group,
    Access,
    Extended extends Body<Group, Access> = Body<Group, Access>
    >(
    value : any,
    access : (value) => value is Access,
    group : Group
    ) : value is Extended {

    if(!AbbreviationType<Extended>(value)) {

        return false;
    }

    if(!EnumType(value.group, group)) {

        return  false;
    }

    if(!NameType<Extended>(value)) {

        return false;
    }

    if(!access(value.access)) {

        return false;
    }

    return true;
}
