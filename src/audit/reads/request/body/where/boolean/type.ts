import NotNull from "@dikac/t-object/boolean/type";
import IsString from "@dikac/t-string/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";
import DeactivatedType from "../../../../../../deactivate/read/request/body/boolean/type";
import Where from "../where";
import EnumType from "@dikac/t-enum/boolean/type";
import Status from "../../../../../status/status";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import TypeDateCompatible from "@dikac/t-date/boolean/compatible";
import Type from "../../../../../type/type";

export default function
    Typez<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    if(!DeactivatedType<Extended>(value)) {

        return false;
    }

    if(value.object !== undefined) {

        if(!TypeNumber(value.object)) {

            return false;
        }
    }

    if(value.status !== undefined) {

        if(!EnumType(value.status, Status)) {

            return false;
        }
    }

    if(value.type !== undefined) {

        if(!EnumType(value.type, Type)) {

            return false;
        }
    }

    if(value.plan !== undefined){

        if(!ArrayOf(value.plan, TypeDateCompatible) || value.plan.length !== 2) {

            return false;
        }
    }

    if(value.realize !== undefined){

        if(!ArrayOf(value.realize, TypeDateCompatible) || value.realize.length !== 2) {

            return false;
        }
    }


    return true;
}
