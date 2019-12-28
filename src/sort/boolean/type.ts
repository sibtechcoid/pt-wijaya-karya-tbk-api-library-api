import NotNull from "@dikac/t-object/boolean/type";
import Sort from "../sort";
import ModeType from "../mode/boolean/type";
import ObjectType from "@dikac/t-object/boolean/type";

export default function Type<Entity>(value : any, entity : Entity) : value is Sort<Entity> {

    if(!NotNull<Sort<Entity>>(value)) {

        return false;
    }

    if(ObjectType(value.sort)) {

        for(let property in value.sort) {

            if(!(property in entity)) {

                return false;
            }

            if(!ModeType(value.sort[property])) {

                return false;

            }
        }
    }

    return true;
}