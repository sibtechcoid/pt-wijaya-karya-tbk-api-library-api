import Body from "../body";
import NotNull from "t-object/boolean/type";
import RecordOf from "t-object/boolean/record-of";
import EnumType from "t-enum/boolean/type";
import ProjectAccess from "../../../../../../qpass/project/access/access";
import UserAccess from "../../../../../../user/access/access";
import UnitKerjaAccess from "../../../../../../qpass/object/access/access";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!RecordOf(value.project, (v) : v is ProjectAccess =>EnumType(v, ProjectAccess))) {

        return false;
    }

    if(!RecordOf(value.user, (v) : v is ProjectAccess =>EnumType(v, UserAccess))) {

        return false;
    }

    if(!RecordOf(value.unitKerja, (v) : v is ProjectAccess =>EnumType(v, UnitKerjaAccess))) {

        return false;
    }

    return true;

}