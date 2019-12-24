import Body from "../body";
import TypeObject from "t-object/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import EnumType from "t-enum/boolean/type";
import UserAccess from "../../../../../../user/access/access";
import ProjectAccess from "../../../../../../qpass/project/access/access";
import ObjectAccess from "../../../../../../qpass/object/access/access";

export default function Typez(value : any) : value is Body {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    if(value.user !== undefined) {

        if(!ArrayOf(value.user, (v) : v is UserAccess => EnumType(v, UserAccess)))  {

            return false;
        }
    }

    if(value.unitKerja !== undefined) {

        if(!ArrayOf(value.unitKerja, (v) : v is ProjectAccess => EnumType(v, ProjectAccess)))  {

            return false;
        }
    }

    if(value.project !== undefined) {

        if(!ArrayOf(value.project, (v) : v is ObjectAccess => EnumType(v, ObjectAccess)))  {

            return false;
        }
    }

    return true;

}