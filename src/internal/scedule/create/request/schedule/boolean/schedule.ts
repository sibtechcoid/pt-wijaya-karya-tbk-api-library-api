import TypeInterface from "../schedule";
import NotNull from "t-object/boolean/type";
import IsString from "t-string/boolean/type";
import IsNumber from "t-number/boolean/type";
import Compatible from "t-date/boolean/compatible";

export default function Schedule<Extended extends TypeInterface = TypeInterface>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

        // public plannedFrom  : Date,
        // public plannedTo  : Date,
        // public realizedFrom  : Date,
        // public realizedTo  : Date,
        // public place  : number,
        // public type  : number,
        // public members  : number[],

    if(!Compatible(value.plannedFrom)) {

        return false;
    }

    if(!Compatible(value.plannedTo)) {

        return false;
    }

    if(!Compatible(value.realizedFrom)) {

        return false;
    }

    if(!Compatible(value.realizedTo)) {

        return false;
    }

    if(!IsNumber(value.type)) {

        return false;
    }


    // if(!IsString(value.abbreviation)) {
    //
    //     return false;
    // }



    return true;
}
