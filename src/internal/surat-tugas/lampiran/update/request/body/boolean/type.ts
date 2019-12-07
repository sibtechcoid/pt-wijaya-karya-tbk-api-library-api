import TypeInterface from "../body";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import IsNumber from "t-number/boolean/type";
import TypeId from "../../../../../../../id/boolean/type";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!TypeId(value)) {

        return false;
    }

    if(value.surat !== undefined) {

        if(!IsNumber(value.surat)) {

            return false;
        }
    }

    console.log('buffer--------');
    console.log(value.data);
    console.log('buffer--------');

    return true;
}
