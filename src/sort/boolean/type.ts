import NotNull from "@dikac/t-object/boolean/type";
import Sort from "../sort";
import ModeType from "../mode/boolean/type";
import ObjectType from "@dikac/t-object/boolean/type";

export default function Type<Entity>(value : any, properties : (keyof Entity)[]) : value is Sort<Entity> {

    if(!NotNull<Sort<Entity>>(value)) {

        return false;
    }

    if(ObjectType(value)) {

        for(let property in value) {

            if(!properties.includes(property)) {

                return false;
            }

            if(!ModeType(value[property])) {

                return false;

            }
        }
    }

    return true;
}