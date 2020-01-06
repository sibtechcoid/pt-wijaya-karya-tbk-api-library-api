import NotNull from "@dikac/t-object/boolean/type";
import DeactivatedType from "../../../../../../../deactivate/read/request/body/boolean/type";
import Where from "../where";
import StringType from "@dikac/t-string/boolean/type";
import BooleanType from "@dikac/t-boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import GroupType from "../../../../../group/boolean/type";


export default function
    Type<Extended extends Where = Where>(value : any) : value is Extended {

    if(!NotNull<Extended>(value)) {

        return false;
    }

    let where : Validator<Required<Where>> = {
      //  created    : (v) => Undefinable(v, DateCompatibleType),
        deactivate : (v) => Undefinable(v, BooleanType),
       // id         : (v) => Undefinable(v, FiniteType),
       // updated    : (v) => Undefinable(v, DateCompatibleType),
        nama        : (v) => Undefinable(v, StringType),
        singkatan    : (v) => Undefinable(v, StringType),
        group    : (v) => Undefinable(v, GroupType),
    };

    return Structure(value, where);


    if(!DeactivatedType<Extended>(value)) {

        return false;
    }

    if(value.singkatan !== undefined) {

        if(!StringType(value.singkatan)) {

            return false;
        }
    }

    if(value.nama !== undefined) {

        if(!StringType(value.nama)) {

            return false;
        }
    }



    return true;
}
