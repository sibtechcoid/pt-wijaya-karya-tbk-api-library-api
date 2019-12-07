import TypeInterface from "../body";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import IsNumber from "t-number/boolean/finite";

export default function Type<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(value.surat === undefined) {

        return false;

    } else {

        if(!IsNumber(parseInt(value.surat.toString()))) {

            return false;
        }
    }
    //
    // console.log('buffer--------');
    // console.log(value.data);
    // console.log('buffer--------');
    // if(!IsNumber(value.data)) {
    //
    //     return false;
    // }


    return true;
}
