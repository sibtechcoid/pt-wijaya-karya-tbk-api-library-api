import Validator from "../../../../../validator/create";
import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../../../route/create";
import UpdateCreate from "../../../../../method/update-create";
import ArrayOf from "t-array/boolean/array-of";
import Type from "../../create/request/data/type";
import TypeType from "../../create/request/data/boolean/type";
import Id from "../../../../../id/id";
import TypeId from "../../../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(
        UpdateCreate(),
        Path(), (value : any) : value is Type & Id => TypeType(value) && TypeId(value)
    );
}
