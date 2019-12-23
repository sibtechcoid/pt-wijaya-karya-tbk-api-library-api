import LevelUsaha from "../body";
import IsFinite from "t-number/boolean/finite";
import TypeId from "../../../../../../id/boolean/type";
import TypeName from "../../../../../../name/update/boolean/type";
import TypeAbbreviation from "../../../../../../abbreviation/update/boolean/type";

export default function Type(value : any) : value is LevelUsaha {

    if(!TypeId<LevelUsaha>(value)) {

        return false;
    }

    if(!TypeName(value)) {

        return false;
    }

    if(!TypeAbbreviation(value)) {

        return false;
    }

    if(value.jenisUnit !== undefined) {

        if(!IsFinite(value.jenisUnit)) {

            return false;
        }
    }

    // if(value.jenisUsaha !== undefined) {
    //
    //     if(!IsFinite(value.jenisUsaha)) {
    //
    //         return false;
    //     }
    // }

    return true;

}


