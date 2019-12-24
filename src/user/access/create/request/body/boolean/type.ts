import Body from "../body";
import NotNull from "t-object/boolean/type";
import EnumType from "t-enum/boolean/type";
import ProjectAccess from "../../../../../../qpass/project/access/access";
import UserAccess from "../../../../../../user/access/access";
import UnitKerjaAccess from "../../../../../../qpass/object/access/access";
import ArrayOf from "t-array/boolean/array-of";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!ArrayOf(value.user, (v) : v is UserAccess => EnumType(v, UserAccess)))  {

        return false;
    }


    if(!ArrayOf(value.unitKerja, (v) : v is ProjectAccess => EnumType(v, ProjectAccess)))  {

        return false;
    }


    if(!ArrayOf(value.project, (v) : v is UnitKerjaAccess => EnumType(v, UnitKerjaAccess)))  {

        return false;
    }

    return true;

}