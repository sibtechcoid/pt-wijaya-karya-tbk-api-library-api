import IdInterface from "../id";
import TypeObject from "t-object/boolean/type";
import TypeString from "t-string/boolean/type";
import TypeNumber from "t-number/boolean/type";

export default function Type<Id extends number>(value : any, id : true) : value is IdInterface<number>;
export default function Type<Id extends undefined>(value : any, id : false) : value is IdInterface<undefined>;
export default function Type<Id extends undefined|number>(value : any, id : boolean)  : value is IdInterface<number|undefined> {

    if(!TypeObject<IdInterface<Id>>(value)) {

        return false;
    }

    if(id) {

        if(!TypeNumber(value.id)) {

            return false;
        }

    } else {

        if(value.id !== undefined) {

            return false;
        }
    }

    return true;
}

