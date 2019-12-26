import NotNull from "@dikac/t-object/boolean/type";
import Sort from "../sort";

export default function Type<Entity>(value : any, entity : Entity) : value is Sort<Entity> {

    if(!NotNull<Sort<Entity>>(value)) {

        return false;
    }

    if(value.sort !== undefined) {

        for(let property in value.sort) {

            if(!(property in entity)) {

                return false;
            }
        }
    }

    return true;
}