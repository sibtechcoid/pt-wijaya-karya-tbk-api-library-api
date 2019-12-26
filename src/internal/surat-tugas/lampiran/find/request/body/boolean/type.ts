import TypeObject from "@dikac/t-object/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import Id from "../../../../../../../id/id";
import StringType from "@dikac/t-string/boolean/type";

interface Optional {
    id ?: number;
}

export default function Type<Extension extends Optional = Optional>(value : any)  : value is Omit<Extension, 'id'> & Id {

    if(!TypeObject<Extension>(value)) {

        return false;
    }

    if(!TypeNumber(value.id)) {

        let id = value.id;

        if(StringType(id)) {

            if((<string>id).match(/^[0-9]*$/) === null) {

                return false;
            }
        }
    }

    return true;
}
