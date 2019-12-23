import Level from "../body";
import InternalType from "../../../../../jenis-usaha/create/request/body/boolean/type";
import IsFinite from "t-number/boolean/finite";
import NotNull from "t-object/boolean/type";
import TypeName from "../../../../../../name/create/boolean/type";
import TypeAbbreviation from "../../../../../../abbreviation/create/boolean/type";


export default function Type(value : any) : value is Level {

    if(!NotNull<Level>(value)) {

        return false;
    }

    if(!IsFinite(value.jenisUnit)) {

        return false;
    }


    if(!TypeName(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }

    //    to be deprecated
    // if(!IsFinite(value.jenisUsaha)) {
    //
    //     return false;
    // }
    //
    return true;

}


