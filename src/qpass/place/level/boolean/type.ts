import Data from "../create/request/data/data";
import InternalType from "../../../../internal/place/type/create/request/data/boolean/type";
import IsFinite from "t-number/boolean/finite";


export default function Type(value : any) : value is Data {

    if(!InternalType<Data>(value)) {

        return false;
    }

    if(!IsFinite(value.place)) {

        return false;
    }

    return true;

}


