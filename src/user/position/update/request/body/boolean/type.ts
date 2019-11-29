import Body from "../body";
import TypeName from "../../../../../../name/update/boolean/type";
import TypeAbbreviation from "../../../../../../abbreviation/update/boolean/type";
import NotNull from "t-object/boolean/type";
import EnumType from "t-enum/boolean/type";
import TypeAccess from "../../../../../access/update/request/body/boolean/type";
import TypeBusiness from "../../../../../../qpass/object/business/update/request/body/boolean/type";
import TypeInterface from "../../../../create/request/body/body";

export default function Typez<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeBusiness<Body>(value)) {

        return false;
    }

    if(!TypeAccess(value)) {

        return false;
    }

    return true;
}
