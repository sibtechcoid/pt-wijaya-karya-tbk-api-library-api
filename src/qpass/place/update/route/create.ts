import Validator from "../../../../validator/create";
import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../../route/create";
import UpdateCreate from "../../../../method/update-create";
import ArrayOf from "t-array/boolean/array-of";
import Data from "../../create/request/place/data";
import TypeType from "../../create/request/place/boolean/type";
import Id from "../../../../id/id";
import TypeId from "../../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(
        UpdateCreate(),
        Path(), (value : any) : value is Data & Id => TypeType(value) && TypeId(value)
    );
}
