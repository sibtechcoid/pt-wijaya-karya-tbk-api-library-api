import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../../../route/create";
import UpdateCreate from "../../../../../method/update-create";
import Data from "../../create/request/data/data";
import TypeType from "../../create/request/data/boolean/type";
import Id from "../../../../../id/id";
import TypeId from "../../../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(
        UpdateCreate(),
        Path(), (value : any) : value is Data & Id => TypeType(value) && TypeId(value)
    );
}
