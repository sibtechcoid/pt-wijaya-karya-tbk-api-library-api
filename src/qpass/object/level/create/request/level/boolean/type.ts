import Level from "../level";
import InternalType from "../../../../../type/create/request/type/boolean/type";
import IsFinite from "t-number/boolean/finite";


export default function Type(value : any) : value is Level {

    if(!InternalType<Level>(value)) {

        return false;
    }

    if(!IsFinite(value.type)) {

        return false;
    }

    return true;

}


