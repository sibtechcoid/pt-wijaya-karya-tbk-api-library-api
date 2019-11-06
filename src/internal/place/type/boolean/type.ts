import TypeInterface from "../type";
import TypeObject from "t-object/boolean/type";
import TypeString from "t-string/boolean/type";
import TypeNumber from "t-number/boolean/type";

export default function Type<Id extends number>(value : any, id : true) : value is TypeInterface<number>;
export default function Type<Id extends undefined>(value : any, id : false) : value is TypeInterface<undefined>;
export default function Type<Id extends undefined|number>(value : any, id : boolean)  : value is TypeInterface<number|undefined> {

    if(!TypeObject<TypeInterface<Id>>(value)) {

        return false;
    }

    if(!TypeString(value.name)) {

        return false;
    }

    if(!TypeString(value.abbreviation)) {

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

