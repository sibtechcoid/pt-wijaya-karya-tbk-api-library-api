import Body from "../body";
import TypeQpass from "../../../../qpass/boolean/type";
import TypeInternal from "../../../../internal/boolean/type";
import NotNull from "t-object/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import IdType from "../../../../../../id/boolean/type";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!IdType(value)) {
        return false;
    }

    if(value.qpass !== undefined) {

        if(!ArrayOf(value.qpass, TypeQpass))  {

            return false;
        }
    }

    if(value.internal !== undefined) {

        if(!ArrayOf(value.internal, TypeInternal))  {

            return false;
        }
    }

    return true;

}