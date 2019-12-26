import NotNull from "@dikac/t-object/boolean/type";
import Finite from "@dikac/t-number/boolean/finite";
import Code from "../../code/code";
import Message from "../../message/message";
import StringType from "@dikac/t-string/boolean/type";

export default function Type<Extended extends Code<number> & Message = Code<number> & Message>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!Finite(value.code)) {

        return false;
    }

    if(!StringType(value.message)) {

        return false;
    }

    return true;
}