import Body from "../body";
import TypeQpass from "../../../../qpass/boolean/type";
import TypeInternal from "../../../../internal/boolean/type";
import NotNull from "t-object/boolean/type";
import ArrayOf from "t-array/boolean/array-of";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!ArrayOf(value.qpass, TypeQpass))  {

        return false;
    }

    if(!ArrayOf(value.internal, TypeInternal))  {

        return false;
    }

    return true;

}